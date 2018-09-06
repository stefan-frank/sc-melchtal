import {Component, OnInit} from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {Entry} from 'contentful';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {News} from "./News";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  eventsInFuture: Entry<any>[] = [];
  news: News[] = [];

  constructor(
    private contentfulService: ContentfulService,
  ) {
  }

  ngOnInit() {
    this.contentfulService.getEventsInFuture({order: 'fields.dateFrom'}).then(ereignisse => this.eventsInFuture = ereignisse);
    this.contentfulService.getNews().then(news => this.news = news);

    this.galleryOptions = [
      {
        imageAnimation: NgxGalleryAnimation.Slide,
        imageInfinityMove: true,
        imageAutoPlay: true,
        imageAutoPlayInterval: 5000,
        thumbnailsColumns: 5

      }
    ];

    this.galleryImages = [
      {
        small: 'assets-static-img/stirnband/stirnband-beispiele.jpeg',
        medium: 'assets-static-img/stirnband/stirnband-beispiele.jpeg',
        big: 'assets-static-img/stirnband/stirnband-beispiele.jpeg'
      },
      {
        small: 'assets-static-img/stirnband/farb-beispiel-anthrazit.jpeg',
        medium: 'assets-static-img/stirnband/farb-beispiel-anthrazit.jpeg',
        big: 'assets-static-img/stirnband/farb-beispiel-anthrazit.jpeg'
      },
      {
        small: 'assets-static-img/stirnband/farb-beispiel-hellviolett.jpeg',
        medium: 'assets-static-img/stirnband/farb-beispiel-hellviolett.jpeg',
        big: 'assets-static-img/stirnband/farb-beispiel-hellviolett.jpeg'
      },
      {
        small: 'assets-static-img/stirnband/farb-beispiel-pink.jpeg',
        medium: 'assets-static-img/stirnband/farb-beispiel-pink.jpeg',
        big: 'assets-static-img/stirnband/farb-beispiel-pink.jpeg'
      },
      {
        small: 'assets-static-img/stirnband/farb-beispiel-türkisblau.jpeg',
        medium: 'assets-static-img/stirnband/farb-beispiel-türkisblau.jpeg',
        big: 'assets-static-img/stirnband/farb-beispiel-türkisblau.jpeg'
      },
    ];
  }
}
