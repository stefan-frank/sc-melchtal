import {Component, Input, OnInit} from '@angular/core';
import {Vorstandsmitglied} from '../models/Vorstandsmitglied.model';

@Component({
  selector: 'app-vorstandsmitglied',
  templateUrl: './vorstandsmitglied.component.html',
  styleUrls: ['./vorstandsmitglied.component.css']
})
export class VorstandsmitgliedComponent implements OnInit {

  @Input()
  public vorstandsmitglied: Vorstandsmitglied;

  constructor() {
  }

  ngOnInit() {
  }

}
