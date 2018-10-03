import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {ContentfulService} from '../contentful.service';
import {Vorstand} from '../Vorstand';

@Component({
  selector: 'app-oberwend',
  templateUrl: './oberwend.component.html',
  styleUrls: ['./oberwend.component.css']
})
export class OberwendComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  vorstandsmitglieder: Vorstand[] = [];

  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit() {

    this.contentfulService.getVorstandByRole('Hüttenwart').then(res => this.vorstandsmitglieder.push(res));

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
        small: 'assets-static-img/oberwend/oberwend-interior/small/IMG_0013.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/500/IMG_0013.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/IMG_0013.jpg',
        description: 'Alphütte Oberwend mit Vorplatz'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/IMG_0033.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/IMG_0033.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/IMG_0033.jpg',
        description: 'Alphütte Oberwend mit Blick auf Pilatus'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Aussenraum_Huettenschuhe.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Aussenraum_Huettenschuhe.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Aussenraum_Huettenschuhe.jpg',
        description: 'Schuhraum'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Keller.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Keller.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Keller.jpg',
        description: 'Keller'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Schrank_Geschirr.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Schrank_Geschirr.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Schrank_Geschirr.jpg',
        description: 'Geschirr'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Schrank_Glaeser.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Schrank_Glaeser.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Schrank_Glaeser.jpg',
        description: 'Gläser'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/IMG_2747.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/IMG_2747.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/IMG_2747.jpg',
        description: 'Pfannen'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/IMG_2749.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/IMG_2749.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/IMG_2749.jpg',
        description: 'Töpfe'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Kochnische.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Kochnische.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Kochnische.jpg',
        description: 'Kochnische'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Schlafraum.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Schlafraum.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Schlafraum.jpg',
        description: 'Schlafraum (Massenschlag mit 24 Betten)'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Schlafraum_2.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Schlafraum_2.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Schlafraum_2.jpg',
        description: 'Schlafraum (Massenschlag mit 24 Betten)'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Schlafraum_3.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Schlafraum_3.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Schlafraum_3.jpg',
        description: 'Schlafraum (Schnarchraum mit 2 Betten)'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Treppenaufgang.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Treppenaufgang.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Treppenaufgang.jpg',
        description: 'Treppenaufgang'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Vorraum.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Vorraum.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Vorraum.jpg',
        description: 'Vorraum'
      },
      {
        small: 'assets-static-img/oberwend/oberwend-interior/big/Wegweiser_Oberwendhütte.jpg',
        medium: 'assets-static-img/oberwend/oberwend-interior/big/Wegweiser_Oberwendhütte.jpg',
        big: 'assets-static-img/oberwend/oberwend-interior/big/Wegweiser_Oberwendhütte.jpg',
        description: 'Wegweiser bei Alphütte Oberwend'
      }
    ];


  }

}
