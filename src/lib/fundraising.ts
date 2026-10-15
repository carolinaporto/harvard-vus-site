// Confirmed against the public campaign sheet on October 15, 2026.
// The campaign's displayed update date is October 14, as supplied by Carol.
export const FUNDRAISING_SNAPSHOT = { raised: 36150, goal: 83514 };
export const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5c-8FJrUG0-k8EEfynOqEdqp4VVmqaviWqdGrNCkekGVM7w9qTJnSmjdq5EGP4UjTW7a6r4zXCadx/pub?gid=0&single=true&output=csv';

export function parseFundraising(csv: string) {
  // The sheet uses Brazilian numbers, including quoted decimal commas.
  const rows: string[][] = [[]];
  let field = '', quoted = false;
  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    if (char === '"') {
      if (quoted && csv[i + 1] === '"') { field += '"'; i++; }
      else quoted = !quoted;
    } else if (!quoted && (char === ',' || char === '\n')) {
      rows[rows.length - 1].push(field.trim()); field = '';
      if (char === '\n') rows.push([]);
    } else field += char;
  }
  rows[rows.length - 1].push(field.trim());
  if (quoted || rows.length < 2) throw new Error('Invalid fundraising CSV');
  const number = (name: string) => {
    const index = rows[0].indexOf(name);
    const value = rows[1][index]?.trim();
    if (!value || !/^\d+(?:\.\d{3})*(?:,\d+)?$/.test(value)) throw new Error('Invalid fundraising amount');
    return Number(value.replace(/\./g, '').replace(',', '.'));
  };
  const raised = number('raised'), goal = number('goal');
  if (!Number.isFinite(raised) || !Number.isFinite(goal) || goal <= 0) throw new Error('Invalid fundraising totals');
  return { raised, goal };
}

export function createFundraisingLoader(fetcher: typeof fetch = fetch) {
  let latest = FUNDRAISING_SNAPSHOT;
  let inFlight: Promise<typeof latest> | undefined;
  let updatedAt = 0;
  return () => {
    if (inFlight) return inFlight;
    if (updatedAt && Date.now() - updatedAt < 60_000) return Promise.resolve(latest);
    inFlight = (async () => {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const response = await fetcher(SHEET_CSV_URL, { signal: AbortSignal.timeout(8000), cache: 'no-store' });
          if (!response.ok) throw new Error('Fundraising request failed');
          latest = parseFundraising(await response.text());
          updatedAt = Date.now();
          break;
        } catch { /* Keep the last confirmed values if the sheet is unavailable. */ }
      }
      return latest;
    })().finally(() => { inFlight = undefined; });
    return inFlight;
  };
}
