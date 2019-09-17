import { Component, OnInit, OnDestroy } from '@angular/core';
import { ElevesService } from 'src/app/services/eleves.service';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit, OnDestroy {
  nom = 'Sébastien';
  age: number;
  contenuSpecial = false;
  eleves = [];
  constructor(
    private elevesService: ElevesService,
  ) {
    this.nom = 'Richard';
    this.age = 20;
    this.eleves = this.elevesService.eleves;
    // this.age = 'vingt';
  }

  toggleSpecialStatus() {
    this.contenuSpecial = !this.contenuSpecial;
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }

}
