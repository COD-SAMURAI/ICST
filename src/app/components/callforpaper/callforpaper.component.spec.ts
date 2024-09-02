import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallforpaperComponent } from './callforpaper.component';

describe('CallforpaperComponent', () => {
  let component: CallforpaperComponent;
  let fixture: ComponentFixture<CallforpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallforpaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallforpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
