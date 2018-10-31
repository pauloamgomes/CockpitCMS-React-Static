#!/bin/bash

cd docker
clear
echo "Starting docker-compose..."
#docker-sync start && docker-compose up -d
docker-compose up -d
echo
echo

if [ $? != 0 ]; then
  echo "Error starting docker instances!"
  exit 1
fi

echo
echo "Done. Your React Static deployed website is running!"
echo
echo " http://localhost:8081"
echo
exit
