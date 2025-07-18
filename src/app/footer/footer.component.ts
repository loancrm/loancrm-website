import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
   email: string = '';
  subscribe() {
    if (this.email) {
      console.log('Subscribed with email:', this.email);
      // Add your API call or logic here
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
