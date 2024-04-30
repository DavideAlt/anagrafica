export interface IComune {
    codice: string;
    nome: string;
    nomeStraniero: string;
    codiceCatastale: string;
    cap: string;
    prefisso: string;
    provincia: {
        nome: string,
        regione: string
    }
    email: string;
    pec: string;
    telefono: string;
    fax: string;
    coordinate: {
        lat: number,
        lng: number
    }
}