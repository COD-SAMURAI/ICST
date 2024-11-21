import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { CountdownComponent } from '../countdown/countdown.component';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule ,MatIcon ,CountdownComponent ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  cards = [
  { icon: 'calendar', iconPath: '../../../assets/icons/calendar.png', head: 'Date' , text: 'Februaray 19-20, 2025' },
  { icon: 'location', iconPath: '../../../assets/icons/location.png', head: 'Venue' , text: 'The National Institute of Engineering'},
  { icon: 'approval', iconPath: '../../../assets/icons/approval.png', head: 'Approved' ,text: 'IEI Approved & Global Participation' },
];

}
