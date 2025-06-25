import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = false;

  constructor(private router: Router, private loaderService: LoaderService) {
    
    this.router.events.subscribe(event => {
      console.log('Router event:', event);
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        // this.loaderService.hide();
        setTimeout(() => this.loaderService.hide(), 1000);
      }
    });

    this.loaderService.loading$.subscribe(status => {
      this.isLoading = status;
    });
  }
  ngOnInit() {
    this.loaderService.show();
    setTimeout(() => {
      this.loaderService.hide();
    }, 3000); // hide after 3 seconds
  }
}
