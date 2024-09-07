import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import Splide from '@splidejs/splide';
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

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const splide = new Splide(this.categoriesContainer.nativeElement, {
        type       : 'loop',
        perPage    : 3,
        focus      : 'center',
        gap        : '1rem',
        pagination : false,
        arrows     : true,
        breakpoints: {
          768: {
            perPage: 1,
          },
        },
      });

      splide.mount();

      // Custom controls
      this.prevButton.nativeElement.addEventListener('click', () => splide.go('<'));
      this.nextButton.nativeElement.addEventListener('click', () => splide.go('>'));
    }
  }
}
