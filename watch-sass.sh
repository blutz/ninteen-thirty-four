#!/bin/sh
# NOTE: Run this on your local machine!! And the web container must be running
find wp-content/themes/ninteen-thirty-four/sass | entr docker-compose exec web ./build-sass.sh
