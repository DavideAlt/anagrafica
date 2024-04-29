import { IDomicilio } from "./domicilio.interface";
import { IResidenza } from "./residenza.interface";

export interface IPersona {
    codiceFiscale: string;
    nome: string;
    cognome: string;
    residenza: IResidenza;
    domicilio: IDomicilio;
}