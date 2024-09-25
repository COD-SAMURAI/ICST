import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    paperId: new FormControl(''),
    transactionId: new FormControl(''),
    accompaniers: new FormControl(''),
  });

  @Input() error!: string | null;
  @Output() submitEM = new EventEmitter();

  constructor(private http: HttpClient) {}

  processPayment() {
  console.log('processPayment called');
  if (this.paymentForm.valid) {
    const formData = this.paymentForm.value;
    console.log('Form data before POST:', formData);

    // Convert formData to JSON string
    const jsonData = JSON.stringify(formData);

    // Make the POST request with JSON data
    this.http.post('http://127.0.0.1:8000/api/payment/', jsonData, {
      headers: { 'Content-Type': 'application/json' }
    })
    .subscribe({
      next: (response) => {
        console.log('Payment processed successfully:', response);
      },
      error: (error) => {
        console.error('Error during payment process:', error);
        console.error('Error details:', error.error ? error.error : error.message);
      }
    });
  } else {
    this.error = 'Please fill in all fields correctly';
    console.log('Form is invalid');
  }
}

 
  
}
