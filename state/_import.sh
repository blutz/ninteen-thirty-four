#!/bin/bash
docker compose -f $(npx wp-env install-path)/docker-compose.yml cp state/db_export_unicamp_org.sql cli:/db_for_import.sql
docker compose -f $(npx wp-env install-path)/docker-compose.yml cp state/htaccess wordpress:/var/www/html/.htaccess
wp-env run cli wp db import /db_for_import.sql
