#!/usr/bin/env bash

cd $(dirname $(realpath $BASH_SOURCE))
./node_modules/.bin/electron . ${@} | xargs -I{} ./piped.sh {}
