import { IDomicilio } from "./domicilio.interface";
import { IResidenza } from "./residenza.interface";

export interface IComune {
    nome: string;
    residenti: IResidenza[];
    domiciliati: IDomicilio[];
}