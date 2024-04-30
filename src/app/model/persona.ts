import { IPersona } from "../interfaces/persona.interface";
import { Domicilio } from "./domicilio";
import { Residenza } from "./residenza";

export class Persona implements IPersona {
    constructor(
        public readonly codiceFiscale: string,
        public readonly nome: string,
        public readonly cognome: string,
        public readonly residenza: Residenza,
        public readonly domicilio: Domicilio
    ) { }
}