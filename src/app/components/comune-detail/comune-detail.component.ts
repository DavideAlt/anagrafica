import { Component, Input, OnInit } from '@angular/core';
import { Comune } from '../../model/comune';

@Component({
  selector: 'app-comune-detail',
  templateUrl: './comune-detail.component.html',
  styleUrl: './comune-detail.component.scss'
})
export class ComuneDetailComponent implements OnInit{
  @Input() comune!: Comune;

  constructor() { }
  ngOnInit(): void { }

}
