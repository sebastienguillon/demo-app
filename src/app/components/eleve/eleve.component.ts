import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.scss']
})
export class EleveComponent implements OnInit {
  @Input() eleve;
  @Input() idx: number;
  @Output() countEvent = new EventEmitter<number>();

  count = 0;
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count++;
  }

  sendCount() {
    this.countEvent.emit(this.count);
  }
}
