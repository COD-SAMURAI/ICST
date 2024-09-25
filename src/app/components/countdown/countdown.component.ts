import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  targetDate: Date = new Date('February 19, 2025 10:00:00'); // Target date
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateCountdown(); // Ensure the first call is made
      this.intervalId = setInterval(async () => {
        await this.updateCountdown(); // Update the countdown every second asynchronously
      }, 1000);
    }
  }

  async updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = this.targetDate.getTime() - now;

    if (timeRemaining > 0) {
      this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    } else {
      this.resetCountdown();
      clearInterval(this.intervalId);
    }
  }

  resetCountdown() {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear interval when the component is destroyed
    }
  }
}
