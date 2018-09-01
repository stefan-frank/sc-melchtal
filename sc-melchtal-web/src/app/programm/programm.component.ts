import {Component, OnInit} from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {Entry} from 'contentful';

@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.css']
})
export class ProgrammComponent implements OnInit {


  events: Entry<any>[] = [];

  constructor(
    private contentfulService: ContentfulService
  ) {
  }

  ngOnInit() {
    this.contentfulService.getEvents().then(ereignisse => this.events = ereignisse);
  }

}
