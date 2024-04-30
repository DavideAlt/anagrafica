import { Component, Input, OnInit } from '@angular/core';
import { Provincia } from '../../model/provincia';
import { Comune } from '../../model/comune';
import { ComuniService } from '../../services/comuni.service';

@Component({
  selector: 'app-provincia-detail',
  templateUrl: './provincia-detail.component.html',
  styleUrls: ['./provincia-detail.component.scss']
})
export class ProvinciaDetailComponent implements OnInit {
  @Input() provincia!: Provincia;
  public comuni!: Comune[];

  constructor(private _comuniService: ComuniService) { }

  ngOnInit(): void {
  }

  requestComuni(nomeProvincia: string): void {
    this._comuniService.getComuni(nomeProvincia).subscribe(reqComuni => {
      this.comuni = reqComuni;
    });
    console.log(this.comuni);
  }
}
