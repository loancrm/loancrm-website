import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) { }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      full_name: ['', Validators.required],
      company_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{10,15}$/)]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const formData = this.contactForm.value;
    console.log(formData)
    this.contactService.sendContactForm(formData).subscribe({
      next: (response: any) => {
        alert(response.message || '✅ Message sent successfully!');
        this.contactForm.reset();
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        const errorMessage = error?.error?.message || '❌ Failed to send the message. Please try again.';
        alert(errorMessage);
        this.loading = false;
      }
    });

  }
  // ngAfterViewInit() {
  //   (() => {
  //     const forms = document.querySelectorAll('.needs-validation');
  //     Array.from(forms).forEach((form: any) => {
  //       form.addEventListener('submit', function (event: Event) {
  //         if (!form.checkValidity()) {
  //           event.preventDefault();
  //           event.stopPropagation();
  //         }
  //         form.classList.add('was-validated');
  //       });
  //     });
  //   })();
  // }
}
