import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {Test} from '../models/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test: Test[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getTest().then(res => this.test = res);
  }

}
