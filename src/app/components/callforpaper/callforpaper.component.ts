import { Component } from '@angular/core';
import { CallforpapersService } from './callforpapers.service'; // Adjust path as needed
import { provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-callforpaper',
  standalone: true,
  imports: [],
  templateUrl: './callforpaper.component.html',
  styleUrl: './callforpaper.component.css'
})
export class CallforpaperComponent {

  constructor(private http: HttpClient) {}

  downloadGuidelines(): void {
    const fileUrl = "../../../assets/documents/guidelines.pdf"; // Path to the file
    const fileName = 'Guidelines_for_Authors.pdf'; // Desired file name
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((response: Blob) => {
      saveAs(response, fileName);
    }, error => {
      console.error('Download failed', error);
    });
  }  

}
