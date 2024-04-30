export class Regione{
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public static mapToRegioni(iregioni: string[]): Regione[] {
        return iregioni.map(nome => new Regione(nome));
    }
}