import { IProvincia } from "../interfaces/provincia.interface";

export class Provincia{
    nome: string;
    regione: string;

    constructor(nome: string, regione: string) {
      this.nome = nome;
      this.regione = regione;
    }

    public static mapToProvince(iprovince: IProvincia[]): Provincia[] {
        return iprovince.map(prov => new Provincia(prov.nome, prov.regione));
    }
}