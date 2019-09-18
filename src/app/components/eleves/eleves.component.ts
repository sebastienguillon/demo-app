import { Component, OnInit } from '@angular/core';
import { ElevesService, Eleve } from 'src/app/interfaces';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.scss'],
})
export class ElevesComponent implements OnInit {
  eleves = [];
  eleveIdx: number;
  receivedCount: number;

  constructor(
    private route: ActivatedRoute,
    private serviceEleves: ElevesService
  ) {
  }

  ngOnInit() {
    this.eleves = this.serviceEleves.eleves;
    // const idEleve = this.route.snapshot.paramMap.get('id');
    // console.log(idEleve);
    this.route.paramMap.pipe(
      map(params => {
        this.eleveIdx = parseInt(params.get('id'), 10);
        console.log(this.eleveIdx);
      })
    ).subscribe();
  }

  ajouterEleve(nom: string): void {
    const nouvelEleve: Eleve = {
      nom: nom,
      prenom: '',
    };
    this.serviceEleves.eleves.push(nouvelEleve);
  }

  displayCount(val) {
    this.receivedCount = val;
  }

}
