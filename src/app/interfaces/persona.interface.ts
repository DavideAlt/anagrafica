import { IComune } from "./comune.interface";

export interface IPersona {
    codiceFiscale: string;
    nome: string;
    cognome: string;
    residenza: IComune;
    domicilio: IComune;
}