import { useState, useEffect } from 'react';
import { createFundraisingLoader, FUNDRAISING_SNAPSHOT } from '../lib/fundraising';

const loadFundraising = createFundraisingLoader();
let latest = FUNDRAISING_SNAPSHOT;
const fmt = (value: number) => 'US$ ' + value.toLocaleString('en-US', { maximumFractionDigits: 0 });

export function useProgress() {
  const [totals, setTotals] = useState(latest);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    void loadFundraising().then(value => {
      latest = value;
      if (active) { setTotals(value); setLoading(false); }
    });
    return () => { active = false; };
  }, []);
  return {
    ...totals,
    percent: Math.min(totals.raised / totals.goal * 100, 100),
    raisedFormatted: fmt(totals.raised),
    goalFormatted: fmt(totals.goal),
    loading,
  };
}
