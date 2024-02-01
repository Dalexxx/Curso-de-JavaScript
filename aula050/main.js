// função usando a palavra function tem arguments que sustenta todos os argumentos
// function funcao() {
//     let total = 0;
//     for (let argumentos of arguments) {
//         total += argumentos
//     }

//     console.log(total)
// }
// funcao(1, 2, 4, 6, 6);

// function funcao (a = 0, b = 0, c = 9) {
//     console.log(a + b + c);
// }

// funcao(2, undefined, 8);

// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = {nome: 'David', sobrenome: 'Alex', idade:22 }
// funcao(obj);

function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao(['David Alex', 'Souza Santos', 30]);

const conta = function(operador, acumulador, ...numeros) {// ... rest operator
    for(let numero of numeros) {
      if (operador === '+')  acumulador += numero;
      if (operador === '-')  acumulador -= numero;
      if (operador === '/')  acumulador /= numero;
      if (operador === '*')  acumulador *= numero;
    }
    console.log(acumulador);
}
conta('*', 1, 20,30,40,50);

const resto = (...args) => {
    console.log(args);
}
resto('+', 1, 20, 30, 40, 50)