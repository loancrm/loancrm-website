import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
ngAfterViewInit() {
  (() => {
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach((form: any) => {
      form.addEventListener('submit', function (event: Event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      });
    });
  })();
}
}
