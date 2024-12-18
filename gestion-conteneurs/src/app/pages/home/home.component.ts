import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToContainers() {
    this.router.navigate(['/containers']);
  }

  // Nouvelle méthode pour rediriger vers la description du projet
  navigateToDescription() {
    this.router.navigate(['/description']);  // Cette route correspond à la page de description
  }
}
