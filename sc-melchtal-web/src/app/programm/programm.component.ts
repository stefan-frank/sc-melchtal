import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as ProgrammActions from '../store/actions/programm.actions';
import * as fromStore from '../store/reducers/index';
import {Ereignis} from '../models/ereignis.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.css']
})
export class ProgrammComponent implements OnInit, AfterViewInit {
  ereignisseInZukunft: Ereignis[];
  ereignisseInVergangenheit: Ereignis[];
  isCollapsed = true;
  SHOW_BUTTON_ANZEIGEN = 'Vergangene Anlässe';
  SHOW_BUTTON_AUSBLENDEN = 'Vergangene Anlässe';

  constructor(
    private store: Store<fromStore.State>,
    private route: ActivatedRoute
  ) {
  }

  public showButtonText(): string {
    return this.isCollapsed ? this.SHOW_BUTTON_ANZEIGEN : this.SHOW_BUTTON_AUSBLENDEN;
  }
  ngOnInit() {
    this.store.select(fromStore.getProgramm).subscribe(programm => this.ereignisseInZukunft = programm.ereignisseInZukunft);
    this.store.select(fromStore.getProgramm).subscribe(programm => this.ereignisseInVergangenheit = programm.ereignisseInVergangenheit);
    this.store.dispatch(new ProgrammActions.LoadProgramm());
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: 'smooth'});
      }
    });
  }

  public toggleShowPast() {
    this.isCollapsed = !this.isCollapsed;
    document.getElementById('top').scrollIntoView({ behavior: 'smooth'});
  }

}
