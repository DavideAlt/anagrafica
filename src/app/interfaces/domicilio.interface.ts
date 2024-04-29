import { IPersona } from "./persona.interface";

export interface IDomicilio {
    indirizzo: string;
    domiciliati: IPersona[];
}