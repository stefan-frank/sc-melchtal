import {BehaviorSubject, Subject} from 'rxjs';

export class UIService {
  loadingStateChanged = new Subject<boolean>();
  authenticationServiceReadyChanged = new BehaviorSubject<boolean>(false);
}

