import { Comune } from "./comune";

export class Persona {
    constructor(
        public readonly codiceFiscale: string,
        public readonly nome: string,
        public readonly cognome: string,
        public readonly residenza: Comune,
        public readonly domicilio: Comune
    ) { }
}