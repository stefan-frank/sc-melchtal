import {Component, Input} from '@angular/core';
import {Album} from '../gallerie/2018/Album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  @Input()
  public album: Album;

}
