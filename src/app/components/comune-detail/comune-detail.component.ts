import { Component, Input, OnInit } from '@angular/core';
import { Comune } from '../../model/comune';
import { ActivatedRoute } from '@angular/router';
import { ComuniService } from '../../services/comuni.service';

@Component({
  selector: '[app-comune-detail]',
  templateUrl: './comune-detail.component.html',
  styleUrl: './comune-detail.component.scss'
})
export class ComuneDetailComponent implements OnInit{
  public comune: Comune = {
    nome: '',
    provincia: '',
    residenti: [],
    domiciliati: []
  };

  constructor(private _route: ActivatedRoute, private _comuniService: ComuniService) { }

  ngOnInit(): void {
    if (history.state.comune) {
      this.comune = history.state.comune;
      return;
    }

    this._route.url.subscribe(segs => {
      this.cercaComune(segs[segs.length - 1].toString());
    })

  }

  private cercaComune(nomeComune: string): void {
    this._comuniService.getComuni().subscribe(comuni => {
      const comuneTrovato = comuni.find(c => c.nome.toLowerCase() === nomeComune.toLowerCase());
      if (comuneTrovato) {
        this.comune = comuneTrovato;
      } else {
        throw 'Comune non trovato'
      }
    });
  }
}


