import { IDomicilio } from "../interfaces/domicilio.interface";
import { Persona } from "./persona";

export class Domicilio implements IDomicilio {
    constructor(
        public indirizzo: string,
        public domiciliati: Persona[]
    ) { }
}