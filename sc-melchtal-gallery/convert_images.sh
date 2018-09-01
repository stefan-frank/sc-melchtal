#!/bin/bash

inputdir="gallery_input"
outputdir="src/assets/img/gallery"

for galleryDirectory in "$inputdir"/*;
do
    galleryName=$(basename "$galleryDirectory")
    echo "Starte: $galleryName ..."
    echo "  Prüfe, ob vorhanden $outputdir/$galleryName ..."
    if [ -d "$outputdir/$galleryName" ]
      then
        echo "  Besteht bereits, überspringe $galleryName"
      else
        echo "  Konvertiere: $galleryName"
        node node_modules/angular2-image-gallery/convert.js "$galleryDirectory" -d --gName="$galleryName"
    fi
    echo "Fertig: $galleryName"
done;

