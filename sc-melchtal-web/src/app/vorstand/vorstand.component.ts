import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../store/reducers/index';
import * as VorstandActions from '../store/actions/vorstand.actions';
import {Vorstandsmitglied} from '../models/Vorstandsmitglied.model';


@Component({
  selector: 'app-vorstand',
  templateUrl: './vorstand.component.html',
  styleUrls: ['./vorstand.component.css']
})
export class VorstandComponent implements OnInit {

  vorstandsmitglieder: Vorstandsmitglied[] = [];
  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.store.select(fromStore.getVorstandsmitglieder).subscribe(vorstand => this.vorstandsmitglieder = vorstand);
    this.store.dispatch(new VorstandActions.LoadVorstand());
  }

}
