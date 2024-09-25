import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  addReminderToGoogleCalendar() {
    const title = encodeURIComponent('ICST Conclave 2025');
    const location = encodeURIComponent('The National Institute of Engineering, Mysuru, Karnataka, India');
    const details = encodeURIComponent('Join us for an inspiring event on sustainable technology.');
    const startDate = '20250219T050000Z'; // YYYYMMDDTHHMMSSZ format
    const endDate = '20250220T123000Z'; // YYYYMMDDTHHMMSSZ format

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;

    window.open(calendarUrl, '_blank');
  }
  getDirections() {
    const destination = encodeURIComponent('The National Institute of Engineering, Mysuru, Karnataka, India');
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;

    window.open(mapsUrl, '_blank');
  }
}
