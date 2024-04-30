import { IResidenza } from "../interfaces/residenza.interface";
import { Persona } from "./persona";

export class Residenza implements IResidenza {
    constructor(
        public indirizzo: string,
        public residenti: Persona[]
    ) { }
}