import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { CommitteeComponent } from './components/committee/committee.component';
import { CallforpaperComponent } from './components/callforpaper/callforpaper.component'
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent , title : "Home page"},
  { path : '', redirectTo: '/home', pathMatch: 'full'},
  { path : 'about' , component: AboutComponent ,title : " About"},
  { path: 'callforpaper' , component: CallforpaperComponent , title : " Call for paper"},
  { path: 'register',component: RegisterComponent ,title : "Register Page" },
  { path: 'sponsors',component: SponsorsComponent ,title : "Sponsors Page"},
  { path: 'tracks',component: TracksComponent ,title : "Tracks Page"},
  { path: 'committee',component: CommitteeComponent ,title : "Committee page"},
  { path: 'contactus' , component: ContactusComponent , title : "Contact us"},
];

