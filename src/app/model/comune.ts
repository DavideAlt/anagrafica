import { IComune } from "../interfaces/comune.interface";
import { Domicilio } from "./domicilio";
import { Residenza } from "./residenza";

export class Comune{
    nome: string;
    provincia: string;
    residenti: Residenza[];
    domiciliati: Domicilio[];

    constructor (nome: string, provincia: string) {
        this.nome = nome;
        this.provincia = provincia;
        this.residenti = [];
        this.domiciliati = [];
    }

    public static mapToComuni(icomuni: IComune[]): Comune[] {
        return icomuni.map(com => new Comune(com.nome, com.provincia.nome));
    }
} 