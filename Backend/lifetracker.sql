\echo 'Delete and recreate your db?'
\prompt 'Return for yes or control-c to cancel> ' answer

DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker

\i lifetracker-schema.sql

