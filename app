#!/usr/bin/env bash

./node_modules/.bin/electron . ${@} | xargs -I{} ./piped.sh {}
