#!/bin/sh
# NOTE: Run this on your local machine!! And the web container must be running
retry -t 0 -f 'say failed' 'find wp-content/themes/ninteen-thirty-four/sass -name "*.scss" | entr docker-compose exec web ./build-sass.sh'
