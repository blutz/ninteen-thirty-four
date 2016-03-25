FROM wordpress
MAINTAINER Byron Lutz <byronlutz@gmail.com>

RUN echo 'php_flag opcache.enable Off' >> /etc/apache2/apache2.conf
