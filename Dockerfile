FROM node:10.10.0-alpine

RUN apk update && apk upgrade \
  && apk run zsh \
  && rm -rf /var/cache/apk/*

ONBUILD ADD app /app/

WORKDIR /

# EXPOSE "8080:8080"

