import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  subscribeForm!: FormGroup;
  loading = false;
  constructor(private contactservice: ContactService, private fb: FormBuilder) {
    // Initialize the form here if needed

  }
  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  // subscribe() {
  //   if (this.email) {
  //     console.log('Subscribed with email:', this.email);
  //     // Add your API call or logic here
  //   } else {
  //     alert('Please enter a valid email address.');
  //   }
  // }


  onSubscribe(): void {
    if (this.subscribeForm.invalid) {
      this.subscribeForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const formData = this.subscribeForm.value;

    this.contactservice.subscribeUser(formData).subscribe({
      next: (response: any) => {
        alert(response.message || '✅ Subscribed successfully!');
        this.subscribeForm.reset();
        this.loading = false;
      },
      error: (error: any) => {
        console.error(error);
        const errorMessage = error?.error?.message || '❌ Failed to subscribe. Please try again.';
        alert(errorMessage);
        this.loading = false;
      }
    });
  }
}
