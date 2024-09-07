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
import { trigger, transition, style, animate } from '@angular/animations';
//fetch(environment.apiUrl);


import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';


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
    NgxSpinnerModule
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  constructor(
              @Inject(PLATFORM_ID) private platformId: Object , 
              private spinner: NgxSpinnerService
            ) {}

  title = 'ICST';
  ngOnInit()
  {
    if (isPlatformBrowser(this.platformId)) {
    AOS.init({
      duration: 2000
    });
    }
  }
  prepareRoute(outlet: any) {
    return outlet?.activatedRouteData?.['animation'];
  }
  showSpinner() {
    this.spinner.show();

    // Hide the spinner after some time
    setTimeout(() => {
      this.spinner.hide();
    }, 3000); // Change the duration as needed
  }
  
}
