import { IComune } from "../interfaces/comune.interface";
import { Domicilio } from "./domicilio";
import { Residenza } from "./residenza";

export class Comune{
    nome: string;
    residenti: Residenza[];
    domiciliati: Domicilio[];

    constructor (icomune: IComune) {
        this.nome = icomune.nome;
        this.residenti = [];
        this.domiciliati = [];
    }
} 