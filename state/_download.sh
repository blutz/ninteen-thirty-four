#!/bin/bash
cd state
ssh uclaunicamp@unicamp.org 'wp --path=unicamp.org --default-character-set=utf8mb4 db export db_export_unicamp_org.sql'
scp uclaunicamp@unicamp.org:db_export_unicamp_org.sql .
scp uclaunicamp@unicamp.org:~/unicamp.org/.htaccess htaccess_original
sed -n -E -e '/# BEGIN WordPress/,$ p' htaccess_original | cat _htaccess-prepend - > htaccess
