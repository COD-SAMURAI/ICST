import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule , MatIconModule ,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  private _isVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get isVisible() {
    return this._isVisible.asObservable();
  }

  public toggleVisibility(): void {
    this._isVisible.next(!this._isVisible.getValue());
  }

  public hideSidebar(): void {
    this._isVisible.next(false);
  }
}