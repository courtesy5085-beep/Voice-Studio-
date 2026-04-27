create table projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  text text,
  audio_url text,
  created_at timestamp default now()
);

create table usage (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  characters int,
  created_at timestamp default now()
);
