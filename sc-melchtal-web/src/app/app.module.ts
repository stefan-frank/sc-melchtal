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
import 'hammerjs';
import {AlbumComponent} from './album/album.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule, MatTabsModule} from '@angular/material';
// Cloudinary
import {CloudinaryModule} from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import { VorstandsmitgliedComponent } from './vorstandsmitglied/vorstandsmitglied.component';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
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
    VorstandsmitgliedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatSelectModule,
    NgxGalleryModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: 'sc-melchtal',
      api_key: '347475193959746',
      api_secret: 'hKSkFsXVCsSPtJ5TUL-CKnfIXCc'
    })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
