import { Component, OnInit } from '@angular/core';
import { ComuniService } from '../../services/comuni.service';
import { Regione } from '../../model/regione';
import { Provincia } from '../../model/provincia';
import { Comune } from '../../model/comune';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent implements OnInit{
  public regioni!: Regione[];
  public province: Provincia[] = [];

  constructor (private _comuniService: ComuniService) { }

  //crea variabili subscription e distruggile una volta finito il popolamento delle variabili interne
  ngOnInit(): void {
    this._comuniService.getRegioni().subscribe(regioni => {
      this.regioni = regioni;
    })
  }

  //fai in modo che possa essere chiamata solo una volta
  requestProvince(nomeRegione: string): void {
    this._comuniService.getProvince(nomeRegione).subscribe(reqProvince => {
      this.province = reqProvince;
    });
  }
}
