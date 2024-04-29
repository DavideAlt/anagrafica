import { IPersona } from "./persona.interface";

export interface IResidenza {
    indirizzo: string;
    residenti: IPersona[];
}