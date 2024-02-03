const relogio = document.querySelector('.relogio');
let segundos = 0; //2
let timer; //4

const criaHoraSegundos = (segundos) => { //1
    let data = new Date(segundos * 1000); //o js recebe em MiliSegundos
    return data.toLocaleTimeString('pt-BR', {timeZone: 'UTC'});
}

const iniciaRelogio = () => { //3
    relogio.classList.remove('pausado');
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        iniciaRelogio();
    }
    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }   
})


