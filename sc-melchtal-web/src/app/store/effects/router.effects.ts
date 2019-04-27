import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ActivationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Action, Store} from '@ngrx/store';
import {filter, map, tap} from 'rxjs/operators';
import * as RouterActionType from '../actions/router.actions';
import {RouteChange, RouterGo} from '../actions/router.actions';
import * as fromStore from '../reducers';
import * as PageActions from '../actions/page.actions';
import {OperatorFunction} from 'rxjs';
import {Page} from '../../constants';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private store: Store<fromStore.State>
  ) {
    this.listenToRouter();
  }

  @Effect({dispatch: false})
  navigate$ = this.actions$.pipe(
    ofType(RouterActionType.RouterActionTypes.RouterGo),
    map((action: RouterGo) => action.payload),
    tap(({path, queryParams, extras}) => this.router.navigate(path, {queryParams, ...extras}))
  );

  @Effect({dispatch: false})
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActionType.RouterActionTypes.RouterBack),
    tap(() => this.location.back())
  );

  @Effect({dispatch: false})
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActionType.RouterActionTypes.RouterForward),
    tap(() => this.location.forward())
  );

  @Effect()
  routedToOberwend$ = this.actions$.pipe(
    ofRoute(this.getValues()),
    map(action => {
      const routeAction = action as RouteChange;
      const routePath = routeAction.payload.path;
      return new PageActions.LoadPage(mapToPageEnum(routePath));
    })
  );

  private getValues() {
    // not supported in < IE 11:
    // return Object.values(Page);

    // compatible way with older browser:
    return Object.keys(Page).map(function(key) {
      return Page[key];
    });
  }

  private listenToRouter() {
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd)
    ).subscribe((event: ActivationEnd) =>
      this.store.dispatch(new RouteChange({
        params: {...event.snapshot.params},
        path: event.snapshot.routeConfig.path
      }))
    );
  }
}

export function ofRoute(route: string | string[]): OperatorFunction<Action, Action> {
  console.log('ofRoute: ' + route);
  return filter((action: Action) => {
    const isRouteAction = action.type === RouterActionType.RouterActionTypes.RouteChange;
    if (isRouteAction) {
      const routeAction = action as RouteChange;
      const routePath = routeAction.payload.path;
      if (Array.isArray(route)) {
        return isStringIncludedInArray(routePath, route);
      } else {
        return routePath === route;
      }
    }
    return isRouteAction;
  });
}

function mapToPageEnum(routePath: string): Page {
  let result: Page;
  Object.keys(Page).forEach(page => {
    if (Page[page] === routePath) {
      result = Page[page];
    }
  });
  return result;
}

// backword compatibility for IE 11 (Array.includes(...) not supported)
function isStringIncludedInArray(string: string, array: string[]): boolean {
  return array.indexOf(string) >= 0;
}
