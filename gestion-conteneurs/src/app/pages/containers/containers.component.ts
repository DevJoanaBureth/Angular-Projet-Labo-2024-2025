import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-containers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent {
  rows: { name: string; date: string; status: string; connection: string }[] = [];

  constructor() {
    // Initialisation avec une ligne vide
    this.rows = [
      { name: '', date: '', status: '', connection: '' },
    ];
  }

  // Suppression des données dans le tableau
  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

  restartRow(index: number) {
    alert(`Redémarrage de la ligne ${index + 1}`);
  }

  viewLogs(index: number) {
    alert(`Affichage des logs pour la ligne ${index + 1}`);
  }

  // Ajouter une nouvelle ligne
  addRow() {
    this.rows.push({ name: '', date: '', status: '', connection: '' });
  }
}
