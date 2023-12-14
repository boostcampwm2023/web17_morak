#!/bin/sh
set -e

host=$(echo $DATABASE_URL | sed -e 's|^[^@]*@||' -e 's|:[^:]*$||')
port=$(echo $DATABASE_URL | sed -e 's|^.*:||' -e 's|/.*$||')

cmd="$@"

until nc -z "$host" "$port"; do
  >&2 echo "Waiting for MySQL to be available at $host:$port..."
  sleep 1
done

>&2 echo "MySQL is up - executing command"
exec $cmd