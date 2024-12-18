import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import du Router pour la navigation

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {} // Injection du Router

  attemptLogin() {
    if (this.login === 'exemple' && this.password === 'exemple') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']); // Redirige vers la page Home
    } else {
      this.errorMessage = 'Login ou mot de passe incorrect';
    }
  }
}
