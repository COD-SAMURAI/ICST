import { Component, AfterViewInit, Renderer2, QueryList, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-committee',
  standalone: true,
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css'], // Corrected to styleUrls
})
export class CommitteeComponent implements AfterViewInit {
  
  @ViewChildren('.card h2') headings!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.headings.forEach((heading) => {
      this.renderer.listen(heading.nativeElement, 'click', () => {
        const card = heading.nativeElement.parentElement as HTMLElement;
        card.classList.toggle('show-people');
      });
    });
  }
}
