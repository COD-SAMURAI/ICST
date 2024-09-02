// file-download.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class CallforpapersService {

  constructor(private http: HttpClient) { }

  downloadFile(fileUrl: string, fileName: string): void {
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((response: Blob) => {
      saveAs(response, fileName);
    }, error => {
      console.error('Download failed', error);
    });
  }
}