import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(
    routes,
    withViewTransitions(),
    withComponentInputBinding(),
    withInMemoryScrolling({scrollPositionRestoration:'enabled'})
  ),
  provideClientHydration()]
};
