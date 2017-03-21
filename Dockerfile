FROM php:5.6-apache
MAINTAINER Byron Lutz <byronlutz@gmail.com>

COPY docker/php.ini /usr/local/etc/php/conf.d/
COPY . /var/www/html/
