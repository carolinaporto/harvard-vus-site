import { useState, useEffect } from 'react';

// ← Cole aqui a URL CSV do Google Sheets (instruções no README ou mensagem da Carol)
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5c-8FJrUG0-k8EEfynOqEdqp4VVmqaviWqdGrNCkekGVM7w9qTJnSmjdq5EGP4UjTW7a6r4zXCadx/pub?gid=0&single=true&output=csv';

interface Progress {
  raised: number;
  goal: number;
  percent: number;
  raisedFormatted: string;
  goalFormatted: string;
  loading: boolean;
}

function fmt(value: number): string {
  return 'US$ ' + value.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

export function useProgress(): Progress {
  const [progress, setProgress] = useState<Progress>({
    raised: 0,
    goal: 78533,
    percent: 0,
    raisedFormatted: 'US$ 0',
    goalFormatted: 'US$ 78,533',
    loading: true,
  });

  useEffect(() => {
    if (!SHEET_CSV_URL) {
      setProgress(p => ({ ...p, loading: false }));
      return;
    }

    fetch(SHEET_CSV_URL)
      .then(r => r.text())
      .then(csv => {
        const map: Record<string, number> = {};
        const clean = (s: string) => s.trim().replace(/^"|"$/g, '');
        const toNum = (s: string) => parseFloat(s.replace(/\./g, '').replace(',', '.'));
        const rows = csv.trim().split(/\r?\n/);
        if (rows.length >= 2) {
          const headers = rows[0].split(',').map(clean);
          const values = rows[1].split(',').map(clean);
          for (let i = 0; i < headers.length; i++) {
            if (headers[i] && values[i]) map[headers[i]] = toNum(values[i]);
          }
        }
        const raised = map['raised'] ?? 0;
        const goal = map['goal'] ?? 78533;
        setProgress({
          raised,
          goal,
          percent: Math.min((raised / goal) * 100, 100),
          raisedFormatted: fmt(raised),
          goalFormatted: fmt(goal),
          loading: false,
        });
      })
      .catch(() => setProgress(p => ({ ...p, loading: false })));
  }, []);

  return progress;
}
