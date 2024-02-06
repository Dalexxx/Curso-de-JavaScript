// Função construtora -> objetos
// Função fábrica -> objetos
// factory -> criaPessoa
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    //atributos ou métodos privados
    const ID = 234455;
    const metodoInterno = function() {

    };
    
    //atributos ou métodos públicos
    //pessoa.nome = 
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
