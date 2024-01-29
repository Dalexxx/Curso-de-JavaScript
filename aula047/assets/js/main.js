const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(e) {
    let data = new Date()
    
    relogio.innerHTML = data.toLocaleTimeString('pt-BR')
})

pausar.addEventListener('click', function(e) {
    alert('cliquei no tico')
})

zerar.addEventListener('click', function(e) {
    alert('cliquei no tico')
})