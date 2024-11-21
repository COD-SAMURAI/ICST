import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router ,RouterOutlet } from '@angular/router';

import { HomeService } from './home.service'; // Import the HomeService
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { VisionMissionComponent } from '../vision-mission/vision-mission.component';
import { CountdownComponent } from '../countdown/countdown.component';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { CardsComponent } from '../cards/cards.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ SponsorsComponent , CardsComponent, CommonModule ,RouterOutlet , AboutComponent ,VisionMissionComponent ,CountdownComponent] 
})
export class HomeComponent  {

   images: string[] = [
    'https://ieimysore.org.in/wp-content/uploads/2024/05/Logo-removebg-preview.png',
    '../../../assets/logos/NieLogo.png',
    'https://www.fh-dortmund.de/WEB-IES/fhdo-module/2.25.0/images/FHDO-Logo-large.svg'
  ];


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


  
}
