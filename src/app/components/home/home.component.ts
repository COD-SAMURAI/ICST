import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router ,RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeService } from './home.service'; // Import the HomeService
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { VisionMissionComponent } from '../vision-mission/vision-mission.component';
//import { CountdownComponent } from '../countdown/countdown.component';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ CommonModule ,RouterOutlet, NavbarComponent, FooterComponent , AboutComponent ,VisionMissionComponent /*CountdownComponent*/] 
})
export class HomeComponent implements OnDestroy, OnInit {


    showCountdown$ = new BehaviorSubject<boolean>(false); 
    private destroy$ = new Subject<boolean>();

  constructor(private homeService: HomeService  ) {} // Inject HomeService

  onDateCardClick() 
  {
    this.homeService.addReminderToGoogleCalendar(); // Call the service method
  }

  onVenueCardClick()
  {
    this.homeService.getDirections();
  }

  ngOnInit(): void {
    // Rebuild the countdown on initialization
    this.buildCountdown();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true); // Trigger cleanup
    this.destroy$.complete();
    console.log('HomeComponent destroyed.');
  }

  private buildCountdown(): void {
    timer(100).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.showCountdown$.next(true); // Render countdown after a short delay
      console.log('CountdownComponent built.');
    });
  }
}
