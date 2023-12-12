import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskWeatherApp';
  constructor(private router: Router) {}

  isAuthPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/signup' || this.router.url ==='**';
  }
}
