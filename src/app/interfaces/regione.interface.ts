import { IProvincia } from "./provincia.interface";

export interface IRegione {
    nome: string;
    province: IProvincia[];
}