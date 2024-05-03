import { Component, Input, OnInit } from '@angular/core';
import { ComuniService } from '../../services/comuni.service';
import { Regione } from '../../model/regione';
import { Provincia } from '../../model/provincia';
import { FormsModule } from '@angular/forms';
import { Comune } from '../../model/comune';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent implements OnInit{

  //regioni viene inizializzata da OnInit
  public regioni!: Regione[];
  public province: Provincia[] = [];
  public comuni: Comune[] = [];

  @Input() regioneCorrente!: Regione;
  @Input() provinciaCorrente!: Provincia;
  @Input() comuneCorrente!: Comune;

  constructor (private _comuniService: ComuniService, private _router: Router) { }

  //crea variabili subscription e distruggile una volta finito il popolamento delle variabili interne
  ngOnInit(): void {
    this._comuniService.getRegioni().subscribe(regioni => {
      this.regioni = regioni;
    })
  }

  requestProvince(nomeRegione: string): void {
    this._comuniService.getProvince(nomeRegione).subscribe(reqProvince => {
      this.province = reqProvince;
      console.log(this.province);
    });
  }

  requestComuni(nomeProvincia: string): void {
    this._comuniService.getComuni(nomeProvincia).subscribe(reqComuni => {
      this.comuni = reqComuni;
      console.log(this.comuni);
    });
  }

  cambioRegione() {
    this.requestProvince(this.regioneCorrente.nome);
    if(this.provinciaCorrente) {
      this.provinciaCorrente.nome = '';
      this.comuneCorrente.nome = '';
    }
  }

  cambioProvincia() {
    this.requestComuni(this.provinciaCorrente.nome);
    if (this.comuneCorrente) {
      this.comuneCorrente.nome = '';
    }
  }

  navigaAComune() {
    this._router.navigate([`/comune-detail/${this.comuneCorrente.nome.toLowerCase()}`], { state: { comune: this.comuneCorrente } });
  }
}
