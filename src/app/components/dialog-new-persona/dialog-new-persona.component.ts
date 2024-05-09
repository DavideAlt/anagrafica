import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
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
  selector: 'app-dialog-new-persona',
  templateUrl: './dialog-new-persona.component.html',
  styleUrl: './dialog-new-persona.component.scss'
})
export class DialogNewPersonaComponent {
  @Output() public addPersona = new EventEmitter<{cf:string, nome: string, cognome: string}>();

  constructor(
    public _dialogRef: MatDialogRef<DialogNewPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {cf:string, nome: string, cognome: string},
  ) {}

  onNoClick(): void {
    this._dialogRef.close();
  }

  public sendData(newCodiceFiscale: string, newNome: string, newCognome: string): void {
    this._dialogRef.close({cf: newCodiceFiscale, nome: newNome, cognome: newCognome});
  }
}
