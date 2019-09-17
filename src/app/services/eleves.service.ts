import { Injectable } from '@angular/core';
import { Eleve } from '../eleve.interface';
import { apiKey } from 'src/app/api-key';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  eleves: Eleve[] = [{
    prenom: 'Joffrey',
    nom: 'Franceschini',
    age: 22
  }];

  constructor() {
    this.eleves.push({
      prenom: 'Gaétan',
      nom: 'Salle',
      age: 24
    });
  }
}
