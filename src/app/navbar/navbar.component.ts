import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; // ✅ IMPORT ROUTER
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;  // ✅ DECLARE ViewChild correctly

  constructor(private router: Router) {}  // ✅ INJECT Router here

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

  // ✅ This function closes the Bootstrap menu on mobile and navigates
  onNavItemClick(path: string): void {
    this.router.navigate([path]);

    const navbar = this.navbarCollapse?.nativeElement;
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
