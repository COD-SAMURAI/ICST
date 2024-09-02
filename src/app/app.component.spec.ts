import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,  // Import the standalone AppComponent here
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'test-id' }),  // Mock ActivatedRoute as needed
          },
        },
      ],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});