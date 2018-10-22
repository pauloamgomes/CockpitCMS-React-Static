#!/bin/bash

cd docker
clear
echo "Stopping docker-compose..."
echo
#docker-compose stop && docker-sync stop
docker-compose stop
exit $?
