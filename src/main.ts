import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),  // Enable fetch API
    provideRouter(
    routes,
    withViewTransitions(),
  ), 
  provideAnimationsAsync(),
  ]
}).catch(err => console.error(err));
