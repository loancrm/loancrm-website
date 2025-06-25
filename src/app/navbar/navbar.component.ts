import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'About', icon: 'pi pi-fw pi-calendar' },
      { label: 'Services', icon: 'pi pi-fw pi-pencil' },
      { label: 'Blog', icon: 'pi pi-fw pi-file' },
      { label: 'Contact', icon: 'pi pi-fw pi-phone' },
    ];

    this.activeItem = this.items[0];
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
