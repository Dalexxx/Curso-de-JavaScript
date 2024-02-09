// Acessando o objeto
const pessoa = {
    nome: 'David',
    sobrenome: 'Alex'
};
console.log(pessoa.nome); //acessando via ponto 
console.log(pessoa['sobrenome']); //acessando colchetes
const chave = 'nome';
console.log(pessoa[chave]);
console.log('////////////////////////////////////////////////////////');

// Formas de criar objetos
const pessoa1 = new Object(); //construtor
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';

const pessoa2 = { //literal
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

console.log(pessoa1, pessoa2);
console.log('////////////////////////////////////////////////////////');

// Apagar objeto
const pessoar = { //literal
    nome: 'David',
    sobrenome: 'Alex'
};

delete pessoar.nome;
console.log(pessoar);
console.log('////////////////////////////////////////////////////////');

// Métodos
const pessoa3 = { 
    nome: 'David',
    sobrenome: 'Alex'
};
pessoa3.idade = 23;
pessoa3.falarNome = function() {
    return (`${this.nome} está falando seu nome;`);
};
pessoa3.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa3.getDataNascimento());
console.log(pessoa3.falarNome());
console.log('////////////////////////////////////////////////////////');

//For in 
for (let chave in pessoa3) {
    console.log(chave);
};
console.log('////////////////////////////////////////////////////////');
////////////////////////////////////////////////////////

//2° parte da aula 
// factory functions / constructor functions / Classes  - Objetos

//Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
};

const p1 = criaPessoa('David', 'Alex');
console.log(p1.nomeCompleto);
console.log('////////////////////////////////////////////////////////');

//Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// new = pega "this" e coloca em um objeto vazio {}
const p2 = new Pessoa('João', 'Pédefeijão');
Object.freeze(p2); //trava as modificações do objeto
p2.nome = 'Outra coisa'
const p3 = new Pessoa('Naruto', 'Uzumaki');
console.log(p2);
console.log(p3);







