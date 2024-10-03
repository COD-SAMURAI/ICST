import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarComponent ,MatMenuModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isSmallScreen: boolean = false;
  private resizeListener: (() => void) | null = null;  // Initialize with null

  constructor(
    public renderer: Renderer2,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    console.log('Constructor called');
    console.log('Injected Platform ID:', this.platformId); // Check what value is received
  }

  ngOnInit(): void {
    console.log('ngOnInit called'); // Debug statement
    console.log('Platform ID:', this.platformId); // Debug statement

    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      console.log('Adding resize listener'); // Debug statement
      // Add resize listener and store the function to remove it
      this.resizeListener = this.renderer.listen('window', 'resize', this.checkScreenSize.bind(this));
    }
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 768;
  }

  ngOnDestroy(): void {
    // Only call resizeListener if it is not null
    if (this.resizeListener!=null) {
      this.resizeListener();  // Call to remove the listener
    }
  }
}