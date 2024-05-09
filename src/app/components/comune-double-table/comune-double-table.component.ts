import { Component, Input } from '@angular/core';
import { Persona } from '../../model/persona';
import { Comune } from '../../model/comune';

@Component({
  selector: '[app-comune-double-table]',
  templateUrl: './comune-double-table.component.html',
  styleUrl: './comune-double-table.component.scss'
})
export class ComuneDoubleTableComponent {
  @Input() public residenti: Persona[] = [];
  @Input() public domiciliati: Persona[] = [];
  @Input() public comune!: Comune;

  public persone: Persona[] = [];

  constructor() {}

  public getPersone(): Persona[] {
    return this.persone = this.residenti.concat(this.domiciliati);
  }
}
