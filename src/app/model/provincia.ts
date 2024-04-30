import { IProvincia } from "../interfaces/provincia.interface";

export class Provincia{

    nome: string;
    regione: string;

    constructor(iprovincia: IProvincia) {
      this.nome = iprovincia.nome;
      this.regione = iprovincia.regione;
    }

    //public mapFromDTO(ip: IProvincia): Provincia {
    //    
    //}
}