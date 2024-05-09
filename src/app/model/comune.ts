import { IComune } from "../interfaces/comune.interface";
import { Persona } from "./persona";

export class Comune{
    nome: string;
    provincia: string;
    residenti: Persona[];
    domiciliati: Persona[];

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