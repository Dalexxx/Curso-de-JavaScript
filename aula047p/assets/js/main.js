function relogio(){
    function getTimeFromSeconds (segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', { timeZone: 'UTC'});
    }

    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;

    function startClock() {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const element = e.target;
        
        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            startClock();
        }
        if (element.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
        }
        if (element.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            seconds = 0
            relogio.innerHTML = '00:00:00'
        }
    });
}
relogio()