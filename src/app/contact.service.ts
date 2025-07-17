import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
   sendContactForm(data: any) {
    return this.http.post('/api/contact', data); // Update with your actual backend URL
  }
}
