-- Vard CRM — leads table
-- Run this in Supabase SQL Editor after creating a new project.

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  company text,
  team_size int,
  source text not null check (source in ('trial', 'sales', 'contact', 'demo', 'calculator')),
  features jsonb default '[]'::jsonb,
  message text,
  status text not null default 'new' check (status in ('new', 'qualified', 'poc', 'won', 'lost')),
  notes text,
  lang text default 'en',
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists leads_updated_at on public.leads;
create trigger leads_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

alter table public.leads enable row level security;

drop policy if exists "Anyone can submit a lead" on public.leads;
create policy "Anyone can submit a lead"
  on public.leads for insert
  with check (true);

drop policy if exists "Authenticated users can view leads" on public.leads;
create policy "Authenticated users can view leads"
  on public.leads for select
  using (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can update leads" on public.leads;
create policy "Authenticated users can update leads"
  on public.leads for update
  using (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can delete leads" on public.leads;
create policy "Authenticated users can delete leads"
  on public.leads for delete
  using (auth.role() = 'authenticated');
