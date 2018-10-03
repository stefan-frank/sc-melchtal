import {Component, OnInit} from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {Vorstand} from '../Vorstand';

@Component({
  selector: 'app-vorstand',
  templateUrl: './vorstand.component.html',
  styleUrls: ['./vorstand.component.css']
})
export class VorstandComponent implements OnInit {

  vorstandsMitglieder: Vorstand[] = [];
  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit() {
    this.contentfulService.getVorstand().then(vorstandsMitglieder => this.vorstandsMitglieder = vorstandsMitglieder);
  }

}
