import {Component, Input, OnInit} from '@angular/core';
import {Vorstand} from '../Vorstand';

@Component({
  selector: 'app-vorstandsmitglied',
  templateUrl: './vorstandsmitglied.component.html',
  styleUrls: ['./vorstandsmitglied.component.css']
})
export class VorstandsmitgliedComponent implements OnInit {

  @Input()
  public vorstandsmitglied: Vorstand;

  constructor() {
  }

  ngOnInit() {
  }

}
