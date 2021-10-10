CREATE SCHEMA public;
create table public.companies_master (
  company_id serial not null
  , company_name character varying(20)
  , active_flag boolean
  , primary key (company_id)
);

insert into public.companies_master(company_name, active_flag)
values
('public company 1', 'true'),
('public company 2', 'true'),
('public company 3', 'true'),
('public company 4', 'true'),
('public company 5', 'true');

create table public.users_master (
  user_id serial not null
  , user_name character varying(50)
  , active_flag boolean
  , primary key (user_id)
);

insert into public.users_master(user_name, active_flag)
values
('public user 1', 'true'),
('public user 2', 'true'),
('public user 3', 'true'),
('public user 4', 'true'),
('public user 5', 'true');

create table public.company_auths (
  company_auth_id serial not null
  , company_id integer not null
  , user_id integer not null
  , primary key (company_auth_id)
);

insert into public.company_auths(company_id, user_id)
values
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

create table public.projects_master (
  project_id serial not null
  , project_name character varying(50)
  , company_id integer not null
  , primary key (project_id)
);

insert into public.projects_master(project_name, company_id)
values
('public project 1', 1),
('public project 2', 2),
('public project 3', 3),
('public project 4', 4),
('public project 5', 5);

CREATE SCHEMA staging;
create table staging.companies_master (
  company_id serial not null
  , company_name character varying(20)
  , active_flag boolean
  , primary key (company_id)
);

insert into staging.companies_master(company_name, active_flag)
values
('staging company 1', 'false'),
('staging company 2', 'false'),
('staging company 3', 'false'),
('staging company 4', 'false'),
('staging company 5', 'false');

create table staging.users_master (
  user_id serial not null
  , user_name character varying(50)
  , active_flag boolean
  , primary key (user_id)
);

insert into staging.users_master(user_name, active_flag)
values
('staging user 1', 'false'),
('staging user 2', 'false'),
('staging user 3', 'false'),
('staging user 4', 'false'),
('staging user 5', 'false');

create table staging.company_auths (
  company_auth_id serial not null
  , company_id integer not null
  , user_id integer not null
  , primary key (company_auth_id)
);

insert into staging.company_auths(company_id, user_id)
values
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);
create table staging.projects_master (
  project_id serial not null
  , project_name character varying(50)
  , company_id integer not null
  , primary key (project_id)
);

insert into staging.projects_master(project_name, company_id)
values
('staging project 1', 1),
('staging project 2', 2),
('staging project 3', 3),
('staging project 4', 4),
('staging project 5', 5);
