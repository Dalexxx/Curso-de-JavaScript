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

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let regressivo = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += regressivo * Number(stringNumerica);
            regressivo--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0' //se menor que 10, retorna o digito em formato de string
    }

    geraNovoCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); //pega o cpf sem os ultimos dois digitos
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraNovoCPF();

        return this.novoCPF === this.cpfLimpo;
    }

}

let validacpf = new ValidaCPF('070.987.720-03');

if (validacpf.valida()) {
    console.log('CPF VÁLIDO')
} else {
    console.log('CPF INVÁLIDO')
}