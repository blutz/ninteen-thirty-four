FROM php:5.6-apache
MAINTAINER Byron Lutz <byronlutz@gmail.com>

# Configure apache plugins
RUN a2enmod rewrite
RUN docker-php-ext-install -j$(nproc) pdo pdo_mysql mysqli

# Install node
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs
RUN apt-get update && apt-get install -y build-essential

COPY docker/php.ini /usr/local/etc/php/conf.d/
COPY . /var/www/html/

