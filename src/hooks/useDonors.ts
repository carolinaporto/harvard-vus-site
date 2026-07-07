import { useState, useEffect, useCallback } from 'react';
import { supabase, type DonorRow } from '../lib/supabase';

const MAX_CHIPS = 5;

export function useDonors() {
  const [donors, setDonors] = useState<DonorRow[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDonors = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    const { data } = await supabase
      .from('donors')
      .select('*')
      .order('amount', { ascending: false });
    setDonors(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchDonors();
    const client = supabase;
    if (!client) return;
    const channel = client
      .channel('donors-realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'donors' }, () => {
        fetchDonors();
      })
      .subscribe();
    return () => { client.removeChannel(channel); };
  }, [fetchDonors]);

  const top3 = donors.slice(0, 3);
  const chips = donors.slice(3, 3 + MAX_CHIPS);
  const overflow = Math.max(0, donors.length - 3 - MAX_CHIPS);

  return { donors, top3, chips, overflow, loading };
}
