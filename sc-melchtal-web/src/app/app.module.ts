import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProgrammComponent} from './programm/programm.component';
import {AppRoutingModule} from './/app-routing.module';
import {HomeComponent} from './home/home.component';
import {GallerieComponent} from './gallerie/gallerie.component';
import {ArchivComponent} from './archiv/archiv.component';
import {VorstandComponent} from './vorstand/vorstand.component';
import {OberwendComponent} from './oberwend/oberwend.component';
import {LinksComponent} from './links/links.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {JoComponent} from './jo/jo.component';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {NgxGalleryModule} from 'ngx-gallery';
import {AlbumComponent} from './album/album.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Cloudinary
import {CloudinaryModule} from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import { VorstandsmitgliedComponent } from './vorstandsmitglied/vorstandsmitglied.component';
import {StoreModule} from '@ngrx/store';
import {ProgrammEffects} from './store/effects/programm.effects';
import {reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import {environment} from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {VorstandEffects} from './store/effects/vorstand.effects';
import {NewsEffects} from './store/effects/news.effects';
import {Angulartics2Module} from 'angulartics2';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './store/router.utils';
import {RouterEffects} from './store/effects/router.effects';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { NewsComponent } from './news/news.component';
import { StatutenComponent } from './statuten/statuten.component';
import {StatutenEffects} from './store/effects/statuten.effects';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from './auth/auth.service';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {MatPaginatorIntl, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule} from '@angular/material';
import {UIService} from './shared/ui.service';
import {getGermanPaginatorIntl} from './german-paginator-intl';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgrammComponent,
    HomeComponent,
    GallerieComponent,
    ArchivComponent,
    VorstandComponent,
    OberwendComponent,
    LinksComponent,
    KontaktComponent,
    JoComponent,
    AlbumComponent,
    VorstandsmitgliedComponent,
    MdToHtmlPipe,
    NewsComponent,
    StatutenComponent,
    TestComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    NgbModule,
    NgxGalleryModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: 'sc-melchtal',
      api_key: '347475193959746',
      api_secret: 'hKSkFsXVCsSPtJ5TUL-CKnfIXCc'
    }),
    EffectsModule.forRoot([ProgrammEffects, VorstandEffects, NewsEffects, AppEffects, RouterEffects, StatutenEffects]),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    Angulartics2Module.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatPaginatorModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'},
    {provide: RouterStateSerializer, useClass: CustomSerializer},
    {provide: MatPaginatorIntl, useValue: getGermanPaginatorIntl()},
    [AuthService, UIService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
