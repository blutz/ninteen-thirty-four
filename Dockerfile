FROM php:7.2-apache
MAINTAINER Byron Lutz <byronlutz@gmail.com>

# Configure apache plugins
RUN a2enmod rewrite
RUN docker-php-ext-install -j$(nproc) pdo pdo_mysql mysqli

# Install node
RUN apt-get update
RUN apt-get install -y gnupg # Requirement for node
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN apt-get update && apt-get install -y build-essential

# Install WP-CLI
RUN curl https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar > /usr/local/bin/wp
RUN chmod +x /usr/local/bin/wp

COPY docker/php.ini /usr/local/etc/php/conf.d/
COPY . /var/www/html/

