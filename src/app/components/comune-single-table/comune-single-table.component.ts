import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { Persona } from '../../model/persona';
import { DialogNewPersonaComponent } from '../dialog-new-persona/dialog-new-persona.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: '[app-comune-single-table]',
  templateUrl: './comune-single-table.component.html',
  styleUrl: './comune-single-table.component.scss'
})
export class ComuneSingleTableComponent {
  @Input() public persone: Persona[] = [];
  @Output() public addPersona = new EventEmitter<{cf:string, nome: string, cognome: string}>();
  @Input() tableType: string = ''; 
  newPersonaCf: string = '';
  newPersonaNome: string = '';
  newPersonaCognome: string = '';

  constructor(private _dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this._dialog.open(DialogNewPersonaComponent, {
      data: {
        cf: this.newPersonaCf,
        nome: this.newPersonaNome,
        cognome: this.newPersonaCognome
      }
    });
    dialogRef.afterClosed().subscribe(r => {
      this.newPersonaCf = r.cf;
      this.newPersonaNome = r.nome;
      this.newPersonaCognome = r.cognome;
      this.newPersona(this.newPersonaCf, this.newPersonaNome, this.newPersonaCognome);
    })

  }

  public newPersona(newCodiceFiscale: string, newNome: string, newCognome: string) {
    this.addPersona.emit({cf: newCodiceFiscale, nome: newNome, cognome: newCognome});
  }

}
