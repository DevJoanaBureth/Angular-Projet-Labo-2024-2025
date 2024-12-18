import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false; // Par défaut déconnecté

  constructor(private router: Router) {}

  navigate(page: string) {
    if (this.isLoggedIn) {
      this.router.navigate([page]);
    } else {
      this.router.navigate(['']);
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
