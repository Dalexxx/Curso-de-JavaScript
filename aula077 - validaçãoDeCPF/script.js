// 070.987.720-03 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
const cpfOri = '070.987.720-03'
const cpf = '070.987.720';
let cpfLimpo = cpf.replace(/\D+/g, ''); //representa qualquer coisa que não é um número
let cpfLimpoOri = cpfOri.replace(/\D+/g, ''); //representa qualquer coisa que não é um número
let cpfArray = Array.from(cpfLimpo);



function primeiroDigito() {
    let i = 10;
    let result = 0;
    for(let num of cpfArray){
        if (i <= 2) break;
        result += num * i
        i--
    };
    let firstDigit = 11 - (result % 11)
    return firstDigit > 10? firstDigit : 0;
}
const digitoum = primeiroDigito()

function segundoDigito() {
    let i = 11;
    let result = 0;
    cpfArray.push(digitoum)
    for(let num of cpfArray){
        if (i <= 1) break;
        result += num * i
        i--
    };
    let secondDigit = 11 - (result % 11);
    cpfArray.push(secondDigit);
    cpfArray = cpfArray.join('')
    return secondDigit > 10? secondDigit : 0;
}

function cpfVerificado(cpfOriginal) {
    segundoDigito();
    cpfOriginal = cpfOriginal.replace(/\D+/g, '')
    return cpfArray === cpfOriginal ? 'cpf válido' : 'cpf inválido'
}

console.log(cpfVerificado('070.987.720-03'))



