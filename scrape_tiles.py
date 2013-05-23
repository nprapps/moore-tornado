#!/usr/bin/env python

import os

from lxml import etree
import requests

KML_CACHE_DIR = '.kml'
IMAGE_CACHE_DIR = '.tiles'

KML_BASE_PATH = 'http://mw1.gstatic.com/crisisresponse/2013/west_tx/geoeye/West_TX_Geoeye_2013_04_19_kml/'
ROOT_KML_PATH = '0.kml'

def get_image(image_path):
    image_cache_path = os.path.join(IMAGE_CACHE_DIR, image_path)

    if os.path.exists(image_cache_path):
        pass
    else:
        image_url = KML_BASE_PATH + image_path
        
        print 'Downloading ' + image_url

        response = requests.get(image_url)

        try:
            os.makedirs(image_cache_path.rsplit('/', 1)[0])
        except OSError:
            pass

        with open(image_cache_path, 'wb') as f:
            f.write(response.content)

def get_kml(path):
    print '.kml/' + path

    cache_path = os.path.join(KML_CACHE_DIR, path)

    if os.path.exists(cache_path):
        with open(cache_path) as f:
            body = f.read()
    else:
        kml_url = KML_BASE_PATH + path

        print 'Fetching ' + kml_url

        response = requests.get(kml_url)
        body = response.content

        try:
            os.makedirs(cache_path.rsplit('/', 1)[0])
        except OSError:
            pass

        with open(cache_path, 'w') as f:
            f.write(body)

    print body
    root = etree.fromstring(body)

    # Download linked KMLs
    for href in root.findall('.//{*}href'):
        if '/' in path:
            if len(path.split('/')) > 2:
                continue

            prefix = path.rsplit('/', 1)[0] + '/'
        else:
            prefix = ''

        if href.text.endswith('png') or href.text.endswith('jpg') or href.text.endswith('jpeg'): 
            get_image(prefix + href.text)
        else:
            get_kml(prefix + href.text)
   
def main():
    get_kml(ROOT_KML_PATH)

if __name__ == '__main__':
    main()
