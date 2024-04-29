import { IComune } from "./comune.interface";

export interface IProvincia {
    nome: string;
    comuni: IComune[];
}