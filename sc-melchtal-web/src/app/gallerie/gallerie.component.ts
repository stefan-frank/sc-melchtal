import {Component, OnInit} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {Gallery} from './2018/Gallery';
import {Photo} from '../Photo';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  public years: Number[];

  private photos: Photo[];
  public selectedGallery: Gallery;

  private _selectedYear: Number;
  private tags: string[];

  constructor(
//    private photoService: PhotoService,
    private galleryService: GalleryService
  ) {
  }

  public get selectedYear(): Number {
    return this._selectedYear;
  }

  public set selectedYear(year: Number) {
    this._selectedYear = year;
    this.galleryService.getGallery(year).subscribe(value => this.selectedGallery = value);
  }

  ngOnInit() {
    this.galleryService.getGalleryYears().subscribe(value => {
      this.years = value;
      if (this.years.length > 0) {
        this.selectedYear = this.years[0];
      }
    });

//    this.photoService.getTags().subscribe(tags => this.tags = tags);

//    this.photoService.getPhotos('2018_Schneeschuhlaufen').subscribe(photos => this.photos = photos);
  }

}
