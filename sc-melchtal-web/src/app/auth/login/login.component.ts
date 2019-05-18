import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {UIService} from '../../shared/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;
  isAuthServiceReady = false;

  private loadingSubscription: Subscription;
  private authenticationServiceReadySubscription: Subscription;

  constructor(private authService: AuthService,
              private uiService: UIService
  ) { }

  ngOnInit() {
    console.log('LoginComponent.ngOnInit() called [isAuthServiceReady = ' + this.isAuthServiceReady + ' ]');
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    // this.isAuthServiceReady = this.authService.isAuthentificationServiceReady;
    this.authenticationServiceReadySubscription = this.uiService.authenticationServiceReadyChanged.subscribe(isAuthServiceReady => {
      this.isAuthServiceReady = isAuthServiceReady;
    });
  }

  ngOnDestroy(): void {
    console.log('LoginComponent.ngOnDestroy() called [isAuthServiceReady = ' + this.isAuthServiceReady + ' ]');
    this.loadingSubscription.unsubscribe();
    this.authenticationServiceReadySubscription.unsubscribe();
  }

  onSubmitSimple(form: NgForm) {
    this.authService.login({
      email: 'anonymous@sc-melchtal.ch',
      password: form.value.password + '-scmelchtal'
    });
  }

  onSubmitEmail(form: NgForm) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }

  onSubmitRegister(form: NgForm) {
    this.authService.registerUser({
        email: form.value.email,
        password: form.value.password
      }
    );
  }
}
