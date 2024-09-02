import { Component , Inject, PLATFORM_ID} from '@angular/core';
import { RouterModule, RouterLink,  RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommitteeComponent } from './components/committee/committee.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import * as AOS from 'aos';

import { environment } from '../environments/environment';
//fetch(environment.apiUrl);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule
    HttpClientModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    SidebarComponent,
    CommitteeComponent,
    RouterLink,
    RouterOutlet,
    MatToolbarModule,
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  title = 'ICST';
  ngOnInit()
  {
    if (isPlatformBrowser(this.platformId)) {
    AOS.init({
      duration: 2000
    });
    }
  }
}
