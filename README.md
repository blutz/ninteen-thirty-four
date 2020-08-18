# Ninteen Thirty-Four

UniCamp's WordPress theme

* * *

Ninteen Thirty-Four uses a docker image *for development only*. Production uses its own Apache/PHP/MySQL environment.

## Getting started

1. Install Docker
1. Copy `wp-config-sample.php` file to `wp-config.php` file. The sample file is already configured for development with Docker.
1. Optional: update the recent database dump in `docker/db-config`. The one in there is encrypted with `git-crypt`. (See below to get a new one.)
1. Start the project with `docker-compose up`
1. Go to [http://localhost:8252](http://localhost:8252) to view the site.

## Developing CSS
Build the `styles/style.css` any way you'd like. This repo has the tools already configured if you'd like.

### Build once

Run `docker-compose exec web ./build-sass.sh`

### Watch for changes

1. Install retry from https://github.com/kadwanev/retry
1. Install `entr` using `brew install entr`
1. Run `./watch-sass.sh` (Make sure the container is running)

## Getting a database dump

Log into the server and execute:

    mysqldump --databases DB_NAME --host=DB_HOST --user=DB_USER --password DB_PASSWORD > DATE.sql

You can look up the needed values from the production wp-config.php file. (If you'd like to start fresh, don't make your own `wp-config.php` file to trigger the WordPress installer.)

## Update to a new prod database

1. Get the new database dump and put it in `docker/db-config` folder
1. Make sure to delete the local database's volume using `docker-compose down -v` (Note that this will remove your local database.  You shouldn't be storing anything useful in it anyway.)
1. Run `docker-compose up` to start like normal. The database container will detect that it's starting for the first time and will load the new database dump.

## Creating a local admin account

_This is generally not needed if you have a prod account_

[WP-CLI](http://wp-cli.org/) is installed on the Docker image. To create a new admin user with it, use:

    docker-compose run web wp --allow-root user create USERNAME EMAIL --role=administrator

This will create a new user and generate a password you can use to log in. You can also use WP-CLI to change existing users' passwords.

## Other useful tips

To connect to an interactive MySQL session:

    docker-compose exec db mysql -uroot -pwordpress
