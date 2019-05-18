import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProgrammComponent} from './programm/programm.component';
import {HomeComponent} from './home/home.component';
import {VorstandComponent} from './vorstand/vorstand.component';
import {JoComponent} from './jo/jo.component';
import {ArchivComponent} from './archiv/archiv.component';
import {LinksComponent} from './links/links.component';
import {OberwendComponent} from './oberwend/oberwend.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {GallerieComponent} from './gallerie/gallerie.component';
import {Page} from './constants';
import {NewsComponent} from './news/news.component';
import {StatutenComponent} from './statuten/statuten.component';
import {TestComponent} from './test/test.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/' + Page.Home, pathMatch: 'full'},
  {path: Page.Programm, component: ProgrammComponent},
  {path: Page.News, component: NewsComponent},
  {path: Page.Home, component: HomeComponent},
  {path: Page.Vorstand, component: VorstandComponent},
  {path: Page.Statuten, component: StatutenComponent},
  {path: Page.Jo, component: JoComponent},
  {path: Page.Archiv, component: ArchivComponent, canActivate: [AuthGuard]},
  {path: Page.Links, component: LinksComponent},
  {path: Page.Oberwend, component: OberwendComponent},
  {path: Page.Kontakt, component: KontaktComponent},
  {path: Page.Gallerie, component: GallerieComponent},
  {path: 'test', component: TestComponent},
  {path: Page.Signup, component: SignupComponent},
  {path: Page.Login, component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'disabled',
    })
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
