FROM wodby/php:7.2-dev-macos

USER root

# Add www-data to wodby group
RUN apk --no-cache add shadow && \
  usermod -a -G wodby www-data && \
  chmod 0775 /var/www/html && \
  chown wodby:www-data /var/www/html

WORKDIR /var/www/html
