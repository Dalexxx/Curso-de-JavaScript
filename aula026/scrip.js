const resultado = document.querySelector('#resultado');
const container = document.querySelector('.container');

function calculo() {
    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);
    let imc = peso / (altura*altura);

    if (isNaN(peso) || isNaN(altura)){
        resultado.innerHTML = 'Você precisa digitar um número'
    }else if(peso <= 0 || altura <= 0){
        resultado.innerHTML = 'Você deixou o espaço em branco'
    } else if(imc < 18.5){
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)} (abaixo do peso)`;
    }else if(imc < 25){
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)} (peso normal)`;
    }else if(imc < 30){
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)} (sobrepeso)`;
    }else if(imc < 35){
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)} (obesidade grau 1)`;
    }else if(imc < 40){
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)} (obesidade grau 2)`;
    }else {
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)} (obesidade grau 3)`;
    }
    
    
};