#!/bin/sh

NGINX_CONF_TEMPLATE=${1:-/etc/nginx/nginx.conf.template}

# 현재 환경에 정의된 환경변수 목록을 생성합니다.
vars_to_subst=$(printf '${%s} ' $(env | cut -d= -f1))

# 목록에 포함된 환경변수만 대체합니다.
envsubst "$vars_to_subst" < "$NGINX_CONF_TEMPLATE" > /etc/nginx/nginx.conf

exec nginx -g 'daemon off;'