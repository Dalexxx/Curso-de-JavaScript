const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const relogio = document.querySelector('.relogio')
let segundos = 0;
let timer;

const getSeconds = (seconds) => {   //pega os segundos
    data = new Date(seconds * 1000); //*1000 pq o js pega o tempo em milisegundos e preciso de segundos
    return data.toLocaleTimeString('pt-BR', { timeZone: 'UTC'} );//converte pro formato 00:00:00
}

const returnHours = () => { 
    timer = setInterval(() => {
        segundos ++;
        relogio.innerHTML = getSeconds(segundos);
    }, 1000);
    return timer
}

iniciar.addEventListener('click', function(){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    returnHours();
})

pausar.addEventListener('click', function(){
    relogio.classList.add('pausado');
    clearInterval(timer);
})

zerar.addEventListener('click', function(){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00'
})