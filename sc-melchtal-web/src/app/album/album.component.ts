import {Component, Input, OnInit} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {environment} from '../../environments/environment';
import {Album} from '../gallerie/2018/Album';

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
    let title: string = this.albumId.substr(5, this.albumId.length - 5);
    while (title.includes('_')) {
      title = title.replace('_', ' ');
    }
    this.album.title = title;

  }



}
