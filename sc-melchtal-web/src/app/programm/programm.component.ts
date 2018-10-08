import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as ProgrammActions from '../store/actions/programm.actions';
import * as fromStore from '../store/reducers/index';
import {Ereignis} from '../models/ereignis.model';

@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.css']
})
export class ProgrammComponent implements OnInit {
  ereignisse: Ereignis[];

  constructor(
    private store: Store<fromStore.State>
  ) {
  }

  ngOnInit() {
    this.store.select(fromStore.getProgramm).subscribe(programm => this.ereignisse = programm.ereignisse);
    this.store.dispatch(new ProgrammActions.LoadProgramm());
  }

}
