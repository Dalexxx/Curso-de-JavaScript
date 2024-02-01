// Declaração de função
falaOi();
function falaOi() {
    console.log('Oie');
};

// First-class objects - funções são objetos de primeira classe
// Function expression
const SouUmDado = function() {
    console.log('Sou um dado');
}

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo: ');
    funcao();
};
executaFuncao(SouUmDado)

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//Dentro de um objeto
const obj = {
    // falar: function() {
    //     console.log('Estou falando...');
    // }
    falar() {
        console.log('estou falando')
    }
};
obj.falar();



