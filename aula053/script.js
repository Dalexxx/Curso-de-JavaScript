//Closures

function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('David');
const funcao2 = retornaFuncao('Alex');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2())