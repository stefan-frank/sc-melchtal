import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-oberwend',
  templateUrl: './oberwend.component.html',
  styleUrls: ['./oberwend.component.css']
})
export class OberwendComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {
  }

  ngOnInit() {

    this.galleryOptions = [
      {
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageDescription: true,
        imageInfinityMove: true,
        imageAutoPlay: true,
        imageAutoPlayInterval: 5000

      }
    ];

    this.galleryImages = [
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/small/IMG_0013.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/500/IMG_0013.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_0013.jpg',
        description: 'Alphütte Oberwend mit Vorplatz'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_0033.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_0033.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_0033.jpg',
        description: 'Alphütte Oberwend mit Blick auf Pilatus'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Aussenraum_Huettenschuhe.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Aussenraum_Huettenschuhe.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Aussenraum_Huettenschuhe.jpg',
        description: 'Schuhraum'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Keller.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Keller.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Keller.jpg',
        description: 'Keller'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schrank_Geschirr.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schrank_Geschirr.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schrank_Geschirr.jpg',
        description: 'Geschirr'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schrank_Glaeser.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schrank_Glaeser.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schrank_Glaeser.jpg',
        description: 'Gläser'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_2747.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_2747.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_2747.jpg',
        description: 'Pfannen'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_2749.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_2749.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/IMG_2749.jpg',
        description: 'Töpfe'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Kochnische.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Kochnische.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Kochnische.jpg',
        description: 'Kochnische'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schlafraum.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schlafraum.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schlafraum.jpg',
        description: 'Schlafraum (Massenschlag mit 24 Betten)'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schlafraum_2.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schlafraum_2.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schlafraum_2.jpg',
        description: 'Schlafraum (Massenschlag mit 24 Betten)'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schlafraum_3.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schlafraum_3.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Schlafraum_3.jpg',
        description: 'Schlafraum (Schnarchraum mit 2 Betten)'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Treppenaufgang.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Treppenaufgang.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Treppenaufgang.jpg',
        description: 'Treppenaufgang'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Vorraum.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Vorraum.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Vorraum.jpg',
        description: 'Vorraum'
      },
      {
        small: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Wegweiser_Oberwendhütte.jpg',
        medium: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Wegweiser_Oberwendhütte.jpg',
        big: 'http://www.sc-melchtal.ch/assets-static-img/oberwend/oberwend-interior/big/Wegweiser_Oberwendhütte.jpg',
        description: 'Wegweiser bei Alphütte Oberwend'
      }
    ];


  }

}
