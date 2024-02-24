#!/bin/bash
wp-env run cli wp theme activate ninteen-thirty-four
wp-env run cli wp user update admin --user_pass=admin
