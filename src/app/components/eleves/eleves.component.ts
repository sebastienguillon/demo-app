import { Component, OnInit } from '@angular/core';
import { ElevesService, Eleve } from 'src/app/interfaces';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.scss'],
})
export class ElevesComponent implements OnInit {
  eleves = [];

  constructor(
    private serviceEleves: ElevesService
  ) {

  }

  ngOnInit() {
    this.eleves = this.serviceEleves.eleves;
  }

  ajouterEleve(nom: string): void {
    const nouvelEleve: Eleve = {
      nom: nom,
      prenom: '',
    };
    this.serviceEleves.eleves.push(nouvelEleve);
  }

}
