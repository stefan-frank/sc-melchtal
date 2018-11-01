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

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'programm', component: ProgrammComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vorstand', component: VorstandComponent},
  {path: 'jo', component: JoComponent},
  {path: 'archiv', component: ArchivComponent},
  {path: 'links', component: LinksComponent},
  {path: 'oberwend', component: OberwendComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'gallerie', component: GallerieComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
