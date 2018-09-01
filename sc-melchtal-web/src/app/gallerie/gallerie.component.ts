import {Component, OnInit} from '@angular/core';
import {Library} from './2018/Library';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  public library: Library = Library.getLibrary();

  ngOnInit() {
  }

}
