import {Component, OnInit} from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {Vorstand} from '../Vorstand';

@Component({
  selector: 'app-vorstand',
  templateUrl: './vorstand.component.html',
  styleUrls: ['./vorstand.component.css']
})
export class VorstandComponent implements OnInit {

  vorstandsmitglieder: Vorstand[] = [];
  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit() {
    this.contentfulService.getVorstand().then(vorstandsmitglieder => this.vorstandsmitglieder = vorstandsmitglieder);
  }

}
