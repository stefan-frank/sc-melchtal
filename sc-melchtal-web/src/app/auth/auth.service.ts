import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthData} from './auth-data.model';
import {User} from './user.model';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Page} from '../constants';
import {TestService} from '../test.service';
import {MatSnackBar} from '@angular/material';
import {UIService} from '../shared/ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private testService: TestService,
              private snackbar: MatSnackBar,
              private uiService: UIService
  ) {
    this.uiService.authenticationServiceReadyChanged.next(false);
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('AuthListener user != null [logged in]');
        this.isAuthenticated = true;
        this.authChange.next(true);
        /* this.router.navigate(['/' + Page.Archiv]); */
        this.changeAuthenticationServiceStatus(true);
      } else {
        console.log('AuthListener user == null [logged out]');
        this.testService.cancelSubscriptions();
        this.authChange.next(false);
        this.isAuthenticated = false;
        this.changeAuthenticationServiceStatus(true);
      }
    });
  }

  registerUser(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email, authData.password
    ).then(result => {
      this.uiService.loadingStateChanged.next(false);
    }).catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.handleAuthenticationError(error);
    });

  }

  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email, authData.password
    ).then(result => {
        this.uiService.loadingStateChanged.next(false);
    }).catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.handleAuthenticationError(error);
    });

  }

  logout() {
    this.afAuth.auth.signOut();
  }


  isAuth() {
    return this.isAuthenticated;
  }

  private changeAuthenticationServiceStatus(status: boolean): void {
    console.log('AuthService changed to: ' + status);
    this.uiService.authenticationServiceReadyChanged.next(status);
  }

  private handleAuthenticationError(error: any) {
    let message: string;

    console.log(error);

    switch (error.code) {
      case 'auth/wrong-password': message = 'Falscher Benutzername oder Passwort'; break;
      default: message = 'Es ist ein Fehler aufgetreten'; break;
    }
    this.snackbar.open(message, null, {
      duration: 5000
    });
  }
}
