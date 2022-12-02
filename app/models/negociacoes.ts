import { Negociacao } from '../models/negociacao.js';

export class Negociacoes {
    private negociacoes:  Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return [...this.negociacoes];
    }

}
