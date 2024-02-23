export const nome = 'David';
export const sobrenome = 'Alex';
export const idade = '22';

export function soma(x, y) {
    return x + y;
};

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
};
