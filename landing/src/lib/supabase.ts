import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const anonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabaseConfigured = Boolean(url && anonKey);

export const supabase = supabaseConfigured
  ? createClient(url, anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, storageKey: 'vard-admin-auth' },
    })
  : null;

export type LeadSource = 'trial' | 'sales' | 'contact' | 'demo' | 'calculator';
export type LeadStatus = 'new' | 'qualified' | 'poc' | 'won' | 'lost';

export interface Lead {
  id: string;
  email: string;
  name: string | null;
  company: string | null;
  team_size: number | null;
  source: LeadSource;
  features: string[] | null;
  message: string | null;
  status: LeadStatus;
  notes: string | null;
  lang: string | null;
  user_agent: string | null;
  created_at: string;
  updated_at: string;
}
