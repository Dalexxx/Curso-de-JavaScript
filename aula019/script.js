/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados
*/

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b)


//Referencia (mutável) - array, object, function - passados pro referência

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b)

// a.push('David');
// console.log(a, c);

const a = {
    nome: 'Luiz',
    sobrenome: 'otávio'
};

const b = {...a};

a.nome = 'David';
console.log(a);
console.log(b);
