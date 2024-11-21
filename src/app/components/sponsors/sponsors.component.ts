import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})
export class SponsorsComponent {

  @ViewChild('cardsContainer')
  cardsContainer!: ElementRef;

  sponsors = [
    { src: 'assets/sponsor1.png', name: 'Company One' },
    { src: 'assets/sponsor2.png', name: 'Company Two' },
    { src: 'assets/sponsor3.png', name: 'Company Three' },
    { src: 'assets/sponsor4.png', name: 'Company Four' },
    { src: 'assets/sponsor5.png', name: 'Company Five' },
    { src: 'assets/sponsor6.png', name: 'Company Six' }
  ];

  scrollLeft() {
    this.cardsContainer.nativeElement.scrollBy({
      left: -370,  // Adjust based on your card width
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.cardsContainer.nativeElement.scrollBy({
      left: 370,  // Adjust based on your card width
      behavior: 'smooth'
    });
  }

}
