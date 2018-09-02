import {Component, Input} from '@angular/core';
import {Gallery} from '../gallerie/2018/Gallery';

@Component({
  selector: 'app-gallerie-detail',
  templateUrl: './gallerie-detail.component.html',
  styleUrls: ['./gallerie-detail.component.css']
})
export class GallerieDetailComponent {

  @Input()
  public gallery: Gallery;
}
