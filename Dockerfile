FROM php:5.6-apache
MAINTAINER Byron Lutz <byronlutz@gmail.com>

RUN a2enmod rewrite
RUN docker-php-ext-install -j$(nproc) pdo pdo_mysql mysqli

COPY docker/php.ini /usr/local/etc/php/conf.d/
COPY . /var/www/html/
