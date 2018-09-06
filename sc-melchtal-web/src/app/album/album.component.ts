import {Component, Input, OnInit} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {NgxGalleryAnimation, NgxGalleryOptions} from 'ngx-gallery';
import {environment} from '../../environments/environment';
import {Album} from '../gallerie/2018/Album';

const DEFAULT_GALLERY_OPTIONS: NgxGalleryOptions[] = [{
  imageAnimation: NgxGalleryAnimation.Slide,
  fullWidth: true,
  breakpoint: 400,
  imageInfinityMove: true,
  imageAutoPlay: false,
  imageSwipe: true,
  imageAutoPlayInterval: 5001,
  thumbnailsColumns: 5,
  thumbnails: false
}];

const BASE_URL = environment.galleryBaseUrl;

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input()
  public albumId: string;

  public album: Album;

  constructor(private galleryService: GalleryService) {
    this.album = new Album();
    this.album.gallery = [];
    this.album.options = DEFAULT_GALLERY_OPTIONS;
  }

  ngOnInit(): void {
    this.galleryService.getAlbum(this.albumId).subscribe(value => {
      value.forEach(albumModel => {
        this.album.gallery.push({
          small: BASE_URL + albumModel.thumbnail.path,
          medium: BASE_URL + albumModel.preview.path,
          big: BASE_URL + albumModel.image.path,
        });
      });
    });
    this.album.title = this.albumId.substr(5, this.albumId.length - 5).replace(/_/, ' ');

  }



}
