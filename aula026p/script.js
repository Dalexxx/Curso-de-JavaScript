const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResult('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getnivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResult(msg, true);
    
    console.log(imc, nivelImc);
});

function getnivelImc (imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];   
}

function getImc (peso, altura) {
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function createP () {
    const paragraph = document.createElement('p');
    return paragraph;
}

function setResult (msg, isValid) {
    const result = document.querySelector('#resultado');
    result.innerHTML = '';

    
    const p = createP();

    if (isValid) {
    p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    result.appendChild(p);
}