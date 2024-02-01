//return
//retorna um valor
//termina a função

// 1° parte da aula
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('luiz', 'Otávio');
const p2 = {
    nome: 'David',
    sobrenome: 'Alex'
};

console.log(p1)
console.log(p2)

// 2° parte da aula
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo!');
console.log(resto);

//3° parte da aula
function criaMultiplicador(multiplicador) {
    
    return function(n) {

        return n * multiplicador;
    };
} 

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));



