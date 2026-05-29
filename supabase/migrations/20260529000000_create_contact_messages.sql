-- Contact form submissions for the portfolio site.
-- Applied to project `aqlliev` (ykawmdkoeldzqvkmjepw) on 2026-05-29.
-- Writes happen only through api/contact.js using the service_role key.
-- RLS is enabled with NO public policies, so the anon and authenticated
-- roles cannot read or write this table (verified: anon insert -> 42501).

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  message text not null check (char_length(message) between 1 and 5000)
);

alter table public.messages enable row level security;

comment on table public.messages is 'Contact form submissions from the portfolio site. Written only via the serverless api/contact.js function using the service_role key. RLS is enabled with NO public policies, so the anon and authenticated roles cannot read or write this table.';

create index if not exists messages_created_at_idx on public.messages (created_at desc);
