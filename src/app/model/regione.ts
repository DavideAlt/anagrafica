import { IRegione } from "../interfaces/regione.interface";

export class Regione{
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public mapToRegioni(iregione: IRegione): Regione{
        this.nome = iregione.nome;
        return new Regione(this.nome);
    }
}