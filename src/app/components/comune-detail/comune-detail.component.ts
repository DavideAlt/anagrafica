import { Component, Input, OnInit } from '@angular/core';
import { Comune } from '../../model/comune';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ComuniService } from '../../services/comuni.service';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-comune-detail',
  templateUrl: './comune-detail.component.html',
  styleUrl: './comune-detail.component.scss'
})
/*
  CONTROLLI INPUT validators
*/
export class ComuneDetailComponent implements OnInit{
openDialog() {
throw new Error('Method not implemented.');
}
  public comune: Comune = {
    nome: '',
    provincia: '',
    residenti: [],
    domiciliati: []
  };

  /* TEST -> */
  public persone!: Persona[];
  public comuni!: Comune[];
  /* TEST <- */

  showResidentiTable: boolean = false;
  showDomiciliatiTable: boolean = false;

  constructor(private _route: ActivatedRoute, private _comuniService: ComuniService) { }

  ngOnInit(): void {
    if (history.state.comune) {
      this.comune = history.state.comune;
      this.popolaComune();
      return;
    }

    this._route.url.subscribe(segs => {
      let provinciaTemp = segs[segs.length-2].toString();
      let comuneTemp = segs[segs.length-1].toString();
      this.cercaComune(provinciaTemp, comuneTemp);
    })
  }

  public handleNewResidente(event: {cf:string, nome: string, cognome: string}) {
    let newResidente = new Persona(event.cf, event.nome, event.cognome, this.comune, new Comune('', ''))
    this.comune.residenti.push(newResidente);
  }
  
  public handleNewDomiciliato(event: {cf:string, nome: string, cognome: string}) {
    let newDomiciliato = new Persona(event.cf, event.nome, event.cognome, new Comune('', ''), this.comune)
    this.comune.domiciliati.push(newDomiciliato);
  }

  public onRadioChange(option: string) {
    if (option === 'res') {
      this.showResidentiTable = true;
      this.showDomiciliatiTable = false;
    } else if (option === 'dom') {
      this.showResidentiTable = false;
      this.showDomiciliatiTable = true;
    } else if (option === 'res_dom') {
      this.showResidentiTable = true;
      this.showDomiciliatiTable = true;
    }
  }

  private cercaComune(provincia: string, comune: string): void {
    this._comuniService.getComuni(provincia).subscribe(comuni => {
      const comuneTrovato = comuni.find(c => c.nome.toLowerCase() === comune.toLowerCase());
      if (comuneTrovato) {
        this.comune = comuneTrovato;
        this.popolaComune();
      } else {
        throw 'Comune non trovato'
      }
    });
  }
  
  private popolaComune(): void {
    /* TEST -> */
    this.persone = [
      new Persona('cf0', 'nome0', 'cognome0', this.comune, this.comune),
      new Persona('cf1', 'nome1', 'cognome1', this.comune, this.comune),
      new Persona('cf2', 'nome2', 'cognome2', this.comune, this.comune),
      new Persona('cf3', 'nome3', 'cognome3', this.comune, this.comune),
      new Persona('cf4', 'nome4', 'cognome4', this.comune, this.comune),
      new Persona('cf5', 'nome5', 'cognome5', this.comune, this.comune),
      new Persona('cf6', 'nome6', 'cognome6', this.comune, this.comune),
      new Persona('cf7', 'nome7', 'cognome7', this.comune, this.comune),
      new Persona('cf8', 'nome8', 'cognome8', this.comune, this.comune),
      new Persona('cf9', 'nome9', 'cognome9', this.comune, this.comune),
    ];
    this.comune.residenti = this.persone.filter((p, index) => index % 2 === 0);
    this.comune.domiciliati = this.persone.filter((p, index) => index % 2 === 1);
    /* TEST <- */

    /* TEST RICERCA PERSONA */
    if (this.comune.nome === 'Civitavecchia') {
      this.comune.residenti.push(new Persona('cfDaTrovare', 'nomeX', 'cognomeX', this.comune, this.comune));
    }
    /* TEST RICERCA PERSONA */
  }
}


