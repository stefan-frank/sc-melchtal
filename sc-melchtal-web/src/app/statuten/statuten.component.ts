import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../store/reducers/index';
import * as StatutenActions from '../store/actions/statuten.actions';
import { documentToHtmlString} from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-statuten',
  templateUrl: './statuten.component.html',
  styleUrls: ['./statuten.component.css']
})
export class StatutenComponent implements OnInit {

  inhalt: String = '<p>nothing!</p>';

  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit() {
    this.store.select(fromStore.getStatuten).subscribe(document => this.inhalt = documentToHtmlString(document));
    this.store.dispatch(new StatutenActions.LoadStatuten());
  }

}
