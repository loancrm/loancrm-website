import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hrm',
  templateUrl: './hrm.component.html',
  styleUrls: ['./hrm.component.scss']
})
export class HrmComponent {
 constructor(private router: Router) {}

 goToPricing(): void {
   this.router.navigate(['/home'], { state: { scrollToPricing: true}});
 }
}
