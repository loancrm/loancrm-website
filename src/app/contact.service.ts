import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private BASE_URL = 'http://localhost:5002/';
  private BASE_URL = 'https://rest.thefintalk.in:5002/';

  constructor(private http: HttpClient) { }
  sendContactForm(data: any) {
    return this.http.post(this.BASE_URL + 'contactus', data);
  }
  subscribeUser(data: any) {
    return this.http.post(this.BASE_URL + 'contactus/subscribe', data);
  }
  getSubscriptionPlans() {
    const url = 'subscriptionPlans/plans';
    return this.http.get(this.BASE_URL + url);
  }
}
