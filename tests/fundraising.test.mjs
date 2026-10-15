import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
const source = await readFile(new URL('../src/lib/fundraising.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { parseFundraising, createFundraisingLoader, FUNDRAISING_SNAPSHOT } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const response = text => new Response(text);
test('reads current sheet and quoted Brazilian decimals', () => {
  assert.deepEqual(parseFundraising('raised,goal\r\n36.150,83.514'), FUNDRAISING_SNAPSHOT);
  assert.deepEqual(parseFundraising('raised,goal\n"36.150,50","83.514,00"'), { raised: 36150.5, goal: 83514 });
  assert.deepEqual(parseFundraising('goal,raised\n83514,0'), { raised: 0, goal: 83514 });
});
test('rejects missing headers, HTML errors and invalid totals', () => {
  for (const input of ['<html>Error</html>', 'raised,goal\n,83514', 'raised,goal\nNaN,83514', 'raised,goal\n36150,0', 'wrong,goal\n1,83514', 'raised,goal\n"36.150,83514']) assert.throws(() => parseFundraising(input));
});
test('network failure keeps confirmed amount rather than zero', async () => {
  let calls = 0;
  const load = createFundraisingLoader(async () => { calls++; throw new Error('offline'); });
  assert.deepEqual(await load(), FUNDRAISING_SNAPSHOT);
  assert.equal(calls, 2);
});
test('HTTP and malformed CSV errors keep confirmed amount', async () => {
  const load = createFundraisingLoader(async () => new Response('raised,goal\n1,1', { status: 500 }));
  assert.deepEqual(await load(), FUNDRAISING_SNAPSHOT);
  assert.deepEqual(await createFundraisingLoader(async () => response('<html>Error</html>'))(), FUNDRAISING_SNAPSHOT);
});
test('retries transient failure, shares requests and reuses valid totals', async () => {
  let calls = 0;
  const load = createFundraisingLoader(async () => { calls++; if(calls === 1) throw new Error('transient'); return response('raised,goal\n37.000,83.514'); });
  const [a,b] = await Promise.all([load(), load()]);
  assert.deepEqual(a, { raised: 37000, goal: 83514 });
  assert.deepEqual(a,b);
  assert.deepEqual(await load(), a);
  assert.equal(calls, 2);
});
