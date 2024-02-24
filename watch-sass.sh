#!/bin/sh
# https://github.com/kadwanev/retry
# NOTE: Run this on your local machine!! And the web container must be running
retry -t 0 -f 'say failed' 'find wp-content/themes/ninteen-thirty-four/sass -name "*.scss" | ./build-sass.sh'
