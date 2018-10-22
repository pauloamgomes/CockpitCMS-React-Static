#!/bin/bash

DOCROOT="www"

if [ -d "www" ]; then
  echo "Cockpit already installed! Remove the www folder first if you want to reinstall."
  exit 1
fi

# cockpit cms
echo "Downloading Cockpit CMS from https://github.com/agentejo/cockpit/archive/next.zip"
wget -qO- -O next.zip https://github.com/agentejo/cockpit/archive/next.zip \
  && unzip -q next.zip \
  && rm next.zip \
  && mv cockpit-next $DOCROOT

# multiple collection link addon
echo "Downloading MultipleCollectionLink from https://github.com/pauloamgomes/Cockpit-MultipleCollectionLink/archive/1.1.zip"
wget -qO- -O multiplecollectionlink.zip https://github.com/pauloamgomes/Cockpit-MultipleCollectionLink/archive/1.1.zip \
  && unzip -q multiplecollectionlink.zip -d $DOCROOT/addons \
  && rm multiplecollectionlink.zip \
  && mv $DOCROOT/addons/Cockpit-MultipleCollectionLink-1.1 $DOCROOT/addons/MultipleCollectionLink

# image styles addon
echo "Downloading ImageStyles addon from https://github.com/pauloamgomes/ImageStyles/archive/1.6.zip"
wget -qO- -O ImageStyles.zip https://github.com/pauloamgomes/ImageStyles/archive/1.6.zip \
  && unzip -q ImageStyles.zip -d $DOCROOT/addons \
  && rm ImageStyles.zip \
  && mv $DOCROOT/addons/ImageStyles-1.6 $DOCROOT/addons/ImageStyles

# LayoutComponents addon
echo "Downloading LayoutComponents addon from https://github.com/agentejo/LayoutComponents/archive/master.zip"
wget -qO- -O LayoutComponents.zip https://github.com/agentejo/LayoutComponents/archive/master.zip \
  && unzip -q LayoutComponents.zip -d $DOCROOT/addons \
  && rm LayoutComponents.zip \
  && mv $DOCROOT/addons/LayoutComponents-master $DOCROOT/addons/LayoutComponents

# CustomComponents addon
echo "Downloading CustomComponents addon from https://github.com/pauloamgomes/Cockpit-CustomComponents/archive/master.zip"
wget -qO- -O CustomComponents.zip https://github.com/pauloamgomes/Cockpit-CustomComponents/archive/master.zip \
  && unzip -q CustomComponents.zip -d $DOCROOT/addons \
  && rm CustomComponents.zip \
  && mv $DOCROOT/addons/Cockpit-CustomComponents-master $DOCROOT/addons/CustomComponents

# UniqueSlugs addon
echo "Downloading UniqueSlugs addon from https://github.com/raffaelj/cockpit_UniqueSlugs/archive/master.zip"
wget -qO- -O UniqueSlugs.zip https://github.com/raffaelj/cockpit_UniqueSlugs/archive/master.zip \
  && unzip -q UniqueSlugs.zip -d $DOCROOT/addons \
  && rm UniqueSlugs.zip \
  && mv $DOCROOT/addons/cockpit_UniqueSlugs-master/UniqueSlugs $DOCROOT/addons/UniqueSlugs \
  && rm -rf $DOCROOT/addons/cockpit_UniqueSlugs-master

# install example sqlite data
echo
echo "Installing example data..."
unzip -q example/storage.zip -d $DOCROOT \
  && chmod -R 0777 $DOCROOT/storage

# restore config
echo "Creating Cockpit configuration file..."
cp -r example/config $DOCROOT/ \
  && chmod 0775 $DOCROOT/config \
  && chmod 0666 $DOCROOT/config/config.yaml

cd docker
echo "Starting docker-compose for the first time..."
docker-compose up -d
echo
echo "All Done!"
echo
echo
echo "----------------------------------------------------------------------"
echo
echo "Access CockpitCMS on http://localhost:8088"
echo
echo " User: admin"
echo " Pass: admin"
echo
echo "----------------------------------------------------------------------"

