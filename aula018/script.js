// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('naruto', 'sasuke', 45)
// const pessoa2 = criaPessoa('fasaf', 'sasuke', 45)
// const pessoa3 = criaPessoa('fas', 'sasuke', 45)
// const pessoa4 = criaPessoa('fas', 'sasuke', 45)

const pessoa1 = {
    nome: 'David',
    sobrenome: 'Alex',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementa() {
        this.idade++
    }

};  

pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();
