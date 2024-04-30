import { Component, OnInit } from '@angular/core';
import { ComuniService } from '../../services/comuni.service';
import { Regione } from '../../model/regione';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent implements OnInit{
  public regioni!: Regione[];

  constructor (private _comuniService: ComuniService) { }

  //ngOnInit(): void {
  //  this._comuniService.getRegioni().subscribe(regioni => {
  //    this.regioni = regioni;
  //    this.regioni.forEach(regione => {
  //      console.log(regione.nome);
  //    });
  //  });
  //}

  ngOnInit(): void {
    this._comuniService.getRegioni().subscribe({
      next: (regioniSub) => {
        console.log('next');
        let tmpRegione!: Regione;
        regioniSub.forEach( r => {
          this.regioni.push(tmpRegione.mapToRegioni(r.nome))
        });
        console.log(this.regioni);
      },
      complete: () => {
        console.log('complete');
        this.regioni.forEach(r => {
          console.log(r.nome);
        });
      }
    });
  }

  

}
