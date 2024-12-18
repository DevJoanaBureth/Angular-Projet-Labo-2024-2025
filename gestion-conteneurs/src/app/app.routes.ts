import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContainersComponent } from './pages/containers/containers.component';
import { DescriptionProjetComponent } from './pages/description-projet/description-projet.component';  // Assurez-vous que ce composant est importé

export const routes: Routes = [
  { path: '', component: LoginComponent },   // La page de login est la première vue
  { path: 'home', component: HomeComponent },  // La page d'accueil
  { path: 'containers', component: ContainersComponent },  // Page des conteneurs
  { path: 'description', component: DescriptionProjetComponent },  // Nouvelle route pour Description du projet
  { path: '**', redirectTo: '' }  // Route par défaut en cas de page non trouvée
];
