#!/bin/sh
# wait-for-it.sh

set -e

host=$(echo $1 | cut -d ':' -f 1)
port=$(echo $1 | cut -d ':' -f 2)
shift

cmd="$@"

until nc -z "$host" "$port"; do
  >&2 echo "Waiting for MySQL to be available at $host:$port..."
  sleep 1
done

>&2 echo "MySQL is up - executing command"
exec $cmd