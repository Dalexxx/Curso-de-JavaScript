// Funções fábrica (Factory Functions)
// Função construtora (Constructor function)
function CriaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto = 'falando sobre NOTHING') { return `${this.nome} está ${assunto}.`; },
        altura,
        peso,
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2) 
        }
    };
}

const p1 = CriaPessoa('David', 'Alex', 1.65, 61);
const p2 = CriaPessoa('Davida', 'Alexa', 1.99, 80);
const p3 = CriaPessoa('Jhon', 'Vacilação', 1.80, 75);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

