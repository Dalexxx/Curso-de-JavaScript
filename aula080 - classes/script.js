class Pessoa {  //dessa forma, já cria o metodo no prototype sozinho
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
}
/////
function Pessoa2(nome, sobrenome) { //mesma coisa, porém sem usar class (precisa add no prototype)
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
};

const p1 = new Pessoa ('David', 'Alex');
const p2 = new Pessoa2 ('David', 'Alex');
console.log(p1);
console.log(p2);