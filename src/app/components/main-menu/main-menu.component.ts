import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ComuniService } from '../../services/comuni.service';
import { Regione } from '../../model/regione';
import { Provincia } from '../../model/provincia';
import { Comune } from '../../model/comune';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})

/*METTI CONTROLLI INPUT IN ONCHANGES */
export class MainMenuComponent implements OnInit, OnChanges{

  public regioni!: Regione[];
  public province: Provincia[] = [];
  public comuni: Comune[] = [];

  @Input() regioneCorrente!: Regione;
  @Input() provinciaCorrente!: Provincia;
  @Input() comuneCorrente!: Comune;

  constructor (private _comuniService: ComuniService, private _router: Router) { }

  ngOnInit(): void {
    let regioniSubscription = this._comuniService.getRegioni().subscribe(regioni => {
      this.regioni = regioni;
      regioniSubscription.unsubscribe();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('asd');
    
    for(const c in changes) {
      console.log(c.toString());
    }
    // if (changes['regioneCorrente'] && !changes[this.regioneCorrente.nome].firstChange) {
    //   this.requestProvince(this.regioneCorrente.nome);
    //   console.log('asdasd');
    // }
    // if (changes[this.provinciaCorrente.nome] && !changes[this.provinciaCorrente.nome].firstChange) {
    //   this.requestComuni(this.provinciaCorrente.nome);
    //   console.log('qweqwe');
    // }
  }

  requestProvince(nomeRegione: string): void {
    let provinceSubscription = this._comuniService.getProvince(nomeRegione).subscribe(reqProvince => {
      this.province = reqProvince;
      provinceSubscription.unsubscribe();
      console.log(this.province);
    });
  }

  requestComuni(nomeProvincia: string): void {
    let comuniSubscription = this._comuniService.getComuni(nomeProvincia).subscribe(reqComuni => {
      this.comuni = reqComuni;
      comuniSubscription.unsubscribe();
      console.log(this.comuni);
    });
  }

  cambioRegione() {
    this.requestProvince(this.regioneCorrente.nome);
    //if(this.provinciaCorrente) {
    //  this.provinciaCorrente.nome = '';
    //  this.comuneCorrente.nome = '';
    //}
  }

  cambioProvincia() {
    this.requestComuni(this.provinciaCorrente.nome);
    //if (this.comuneCorrente) {
    //  this.comuneCorrente.nome = '';
    //}
  }

  navigaAComune() {
    this._router.navigate([`/comune-detail/${this.regioneCorrente.nome.toLowerCase()}/${this.provinciaCorrente.nome.toLowerCase()}/${this.comuneCorrente.nome.toLowerCase()}`], { state: { comune: this.comuneCorrente } });
  }
}
