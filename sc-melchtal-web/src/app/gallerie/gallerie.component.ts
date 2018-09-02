import {Component, OnInit} from '@angular/core';
import {Library} from './2018/Library';
import {Gallery} from './2018/Gallery';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  public selectedYear;

  public library: Library;
  public selectedGallery: Gallery;
  public galleries: Array<Gallery>;

  ngOnInit() {
    this.library = new Library();
    this.galleries = this.library.galleries;
    this.selectedGallery = this.galleries[0];
    this.selectedYear = this.selectedGallery.year;
    console.log('Gallerie => length: ' + this.galleries.length);
  }

}
