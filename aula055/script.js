// Funções imediatas (IIFE - Immediately invoked function expression)

(function(idade, peso, altura) {     
    const meuNome = 'David';  //utilizando dessa forma, não toca no escopo global
    
    const sobrenome = 'Santos'
    function CriaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(CriaNome('David'));
    }

    falaNome()
    console.log(idade, peso, altura);
})(22, 61, 1.65);

// (function) () {  //função imediata, ela executa sem precisar chamar

// }();

const meuNome = 'Alex';