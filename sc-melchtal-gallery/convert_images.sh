#!/bin/bash

# Add a flag to define the order of the images inside the gallery
# -n sort by file name (default)
# -d sort chronologically by the original creation time (e.g. for coverages of a wedding)
# -c sort by primary image color
# Additional optional parameter to support multiple galleries. Add it if you want to put your images into a separate gallery.
# --gName=yourGalleryName

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

