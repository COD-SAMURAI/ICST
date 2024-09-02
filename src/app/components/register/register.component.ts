import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { fromEvent, interval, merge } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('prevButton', { static: true }) prevButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextButton', { static: true }) nextButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('categoriesContainer', { static: true }) categoriesContainer!: ElementRef<HTMLDivElement>;

  currentIndex = 0;
  maxIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const activators = Array.from(this.categoriesContainer.nativeElement.querySelectorAll('.carousel__activator'));

      this.maxIndex = activators.length - 1;

      const prevClick$ = fromEvent(this.prevButton.nativeElement, 'click').pipe(
        map(() => -1)
      );

      const nextClick$ = fromEvent(this.nextButton.nativeElement, 'click').pipe(
        map(() => 1)
      );

      const autoSlide$ = interval(5000).pipe(
        map(() => 1)
      );

      // Merging manual clicks with auto slide
      merge(prevClick$, nextClick$, autoSlide$)
        .pipe(
          takeWhile(() => activators.length > 0) // Only slide if there are activators
        )
        .subscribe((direction: number) => {
          this.currentIndex = (this.currentIndex + direction + activators.length) % activators.length;
          this.updateTransform();
        });
    }
  }

  updateTransform() {
    this.categoriesContainer.nativeElement.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}
