#!/usr/bin/env bash

input=$1

window_title='sealant'

echo $input

# process commands
case $input in
    'sealant: keepontop')
	command -v wmctrl >/dev/null && wmctrl -r $window_title -b add,above
	echo 'Window stays on top.'
    ;;
esac
