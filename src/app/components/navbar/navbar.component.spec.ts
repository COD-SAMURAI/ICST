import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { isPlatformBrowser } from '@angular/common';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let renderer2: jasmine.SpyObj<Renderer2>;
  let platformId: Object;

  beforeEach(async () => {
    const renderer2Spy = jasmine.createSpyObj('Renderer2', ['listen']);

    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),  // Use RouterModule.forRoot with an empty route array
        CommonModule,
        SidebarComponent,
        NavbarComponent
      ],
      providers: [
        { provide: Renderer2, useValue: renderer2Spy },
        { provide: PLATFORM_ID, useValue: 'browser' }  // Provide a mock value for PLATFORM_ID
      ]
    }).compileComponents();

    renderer2 = TestBed.inject(Renderer2) as jasmine.SpyObj<Renderer2>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    platformId = TestBed.inject(PLATFORM_ID);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with isSmallScreen false', () => {
    expect(component.isSmallScreen).toBeFalse();
  });


  it('should set isSmallScreen based on window size', () => {
    spyOnProperty(window, 'innerWidth', 'get').and.returnValue(500);  // Mock window.innerWidth
    component.checkScreenSize();
    expect(component.isSmallScreen).toBeTrue();
  });

  it('should add and remove resize listener on ngOnInit and ngOnDestroy', () => {
    // Arrange: Create a mock function for the removeListener
    const mockRemoveListener = jasmine.createSpy('removeListener');
  
    // Spy on Renderer2.listen and return the mock function
    const renderer2Spy = jasmine.createSpyObj('Renderer2', ['listen']);
    renderer2Spy.listen.and.callFake((target: any, event: string, callback: (event: any) => void) => {
      // Return the mock removeListener function
      return mockRemoveListener;
    });
  
    // Replace the renderer2 instance in the component with the spy

  
    // Act: Call ngOnInit to add the listener
    component.ngOnInit();
  
    // Assert: Verify Renderer2.listen was called with correct parameters
    expect(renderer2Spy.listen).toHaveBeenCalledWith('window', 'resize', jasmine.any(Function));
  
    // Act: Call ngOnDestroy to remove the listener
    component.ngOnDestroy();
  
    // Assert: Verify the mock removeListener function was called
    expect(mockRemoveListener).toHaveBeenCalled();
  });

  it('should not call resizeListener if it is null on ngOnDestroy', () => {
    // Arrange: Set resizeListener to null
    component['resizeListener'] = null;
  
    // Create a spy on Renderer2.listen
    const mockRemoveListener = jasmine.createSpy('removeListener');
    const renderer2Spy = jasmine.createSpyObj('Renderer2', ['listen']);
    renderer2Spy.listen.and.callFake((target: any, event: string, callback: (event: any) => void) => {
      // Return the mockRemoveListener to simulate removing the listener
      return mockRemoveListener;
    });
  
    // Replace the renderer2 instance in the component with the spy

  
    // Act: Call ngOnDestroy
    component.ngOnDestroy();
  
    // Assert: Verify that Renderer2.listen was not called
    expect(renderer2Spy.listen).not.toHaveBeenCalled();
  
    // Optionally, verify that the mockRemoveListener was not called
    expect(mockRemoveListener).not.toHaveBeenCalled();
  });

  it('should correctly determine platform as browser', () => {
    expect(isPlatformBrowser(platformId)).toBeTrue();
  });
});