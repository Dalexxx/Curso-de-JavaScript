//Calculadora utilizando factory function

function criaCalculadora() { //0
    
    return {
        display: document.querySelector('.display'),
        
        inicia() { //método para iniciar a calculadora
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => { //arrow function aqui para n perder o this (com função normal, o this vira o documento)
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        clearDisplay() {
            this.display.value = ''; //limpa o display
        },

        realizaConta() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta); //função perigosa, ela tenta executar string. usuário pode alterar o js

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },
        
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); //tamanho da string -1
        },

        //1

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia()