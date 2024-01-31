//não consegui nesse, fiz no 047p

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(e) {
    let start = setInterval(function () {
    relogio = atualizarTimer();
    }, 1000);
    
    //start = setInterval(() => relogio.innerHTML = atualizarTimer())
    //const intervalId = setInterval(atualizarTimer, 1000);
})

pausar.addEventListener('click', function(e) {
    
})

zerar.addEventListener('click', function(e) {
    clearInterval(start)
    relogio.innerHTML = '00:00:00'
})

function mostraHora() {
    let data = new Date(0);
    return data.toLocaleTimeString('pt-BR');
}

let data = new Date(0); // Inicializa um objeto Date com o valor 0 (01 de janeiro de 1970 00:00:00 UTC)



function atualizarTimer() {
  data.setSeconds(data.getSeconds() + 1);

  // Obtém as partes de hora, minuto e segundo formatadas
  const horasFormatadas = data.getUTCHours().toString().padStart(2, '0');
  const minutosFormatados = data.getUTCMinutes().toString().padStart(2, '0');
  const segundosFormatados = data.getUTCSeconds().toString().padStart(2, '0');
  relogio.innerHTML = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`
  console.log(`${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`);
}

// Inicia o timer com um intervalo de 1000 milissegundos (1 segundo)
//const intervalId = setInterval(atualizarTimer, 1000);

// Exemplo de como parar o timer após 10 segundos (10000 milissegundos)
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Timer encerrado após 10 segundos.");
// }, 10000);