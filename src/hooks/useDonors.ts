import { useState, useEffect, useCallback } from 'react';
import { supabase, type DonorRow } from '../lib/supabase';

const MAX_CHIPS = 5;

export function useDonors() {
  const [donors, setDonors] = useState<DonorRow[]>([]);
  const [loading, setLoading] = useState(Boolean(supabase));
  const [error, setError] = useState(false);

  const fetchDonors = useCallback(() => {
    if (!supabase) return Promise.resolve();
    return supabase
      .from('donors')
      .select('*')
      .neq('show_in_ranking', false)
      .order('amount', { ascending: false })
      .then(({ data, error: queryError }) => {
        if (queryError) {
          setError(true);
        } else {
          setDonors(data ?? []);
          setError(false);
        }
        setLoading(false);
      }, () => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    void fetchDonors();
    const client = supabase;
    if (!client) return;
    const channel = client
      .channel('donors-realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'donors' }, () => {
        void fetchDonors();
      })
      .subscribe();
    return () => { void client.removeChannel(channel); };
  }, [fetchDonors]);

  const retry = () => {
    setLoading(true);
    void fetchDonors();
  };
  const top3 = donors.slice(0, 3);
  const chips = donors.slice(3, 3 + MAX_CHIPS);
  const overflow = Math.max(0, donors.length - 3 - MAX_CHIPS);

  return { donors, top3, chips, overflow, loading, error, configured: Boolean(supabase), retry };
}
