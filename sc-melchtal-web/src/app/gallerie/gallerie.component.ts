import {Component, OnInit} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {Gallery} from './2018/Gallery';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  public years: Number[];

  constructor(private galleryService: GalleryService) {
  }
  public selectedGallery: Gallery;

  private _selectedYear: Number;

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
  }

}
