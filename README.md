# Ninteen Thirty-Four

UniCamp's WordPress theme

* * *

Ninteen Thirty-Four uses a docker image *for development only*. Because of our hosting setup (and simplicity), production has its own Apache/PHP environment, so this repo only needs to be cloned there.

## Getting started

1. Install Docker (use [Docker for Mac](https://docs.docker.com/docker-for-mac/install/) if you're on a Mac)
1. Copy `wp-config-sample.php` file to `wp-config.php` file. (All development settings are already configured, but feel free to change it.)
1. Put a recent database dump in `docker/db-config` (if you don't have one, see below)
1. Start the dockers with `docker-compose up`
1. Go to [http://localhost:8080](http://localhost:8080) to view the site.

To remove the HTTPS warning, log into your local WordPress admin and disable the HTTPS plugin. You can then remove the line defining `FORCE_SSL` in your local config.

Remember that CSS/JS are compiled using node. If you want to change any of that, read the section below.

## Getting a database dump
Log into the server and execute:

    mysqldump --databases DB_NAME --host=DB_HOST --user=DB_USER --password DB_PASSWORD > DATE.sql

This should be automated in the future. You can look up the values needed from the production wp-config.php file. Ideally this should be automated in the future.

If you don't have access to the prod server, talk to an existing developer. You can also proceed without a database dump. (In that case, don't make your own wp-config.php file since you'll want to go through the default WordPress setup process.)

## Developing CSS/JS
CSS and JS are compiled using gulp. The easiest way to compile the source is...

1. Log into bash on a new web instance: `docker-compose run web /bin/bash`
1. Move into the ninteen-thirty-four directory: `cd /var/www/html/wp-content/themes/ninteen-thirty-four`
1. Install node packages: `npm install`
1. Watch files to build a new source: `npm run-script watch` (substitute `watch` with `build` if you just want to build once.)

## Creating a local admin account

[WP-CLI](http://wp-cli.org/) is installed on the Docker image. You can use it to create new users like this: (replace `USERNAME` and `EMAIL` with the new values you want)

    docker-compose run web wp --allow-root user create USERNAME EMAIL --role=administrator

This will create a new user and generate a password you can use to log in.

You can also use WP-CLI to change existing users' passwords like `admin`.

## Update to a new prod database

1. Get the new database dump and put it in `docker/db-config` folder
1. Make sure to delete the local database's volume using `docker-compose down -v` (Note that this will remove your local database.  You shouldn't be storing anything useful in it anyway.)
1. Run `docker-compose up` to start like normal. The database container will detect that it's starting for the first time and will load the new database dump.

## Other useful tips

To connect to an interactive MySQL session:

    docker exec -it ninteenthirtyfour_db_1 mysql -uroot -pwordpress
