let numero = document.getElementById('numero');
let raiz = document.getElementById('raiz');
let int = document.getElementById('int');
let notanum = document.getElementById('notanum');
let alow = document.getElementById('alow');
let aup = document.getElementById('aup');
let twof = document.getElementById('2f');

const num = Number(prompt('Digite um número: '));

numero.textContent += num;
raiz.textContent += Math.sqrt(num);
int.textContent = `${num} é inteiro: ${Number.isInteger(num)}`;
notanum.textContent = `É NaN: ${Number.isNaN(num)}`
alow.textContent = `Arrendondando para baixo: ${Math.floor(num)}`;
aup.textContent = `Arrendondando para baixo: ${Math.ceil(num)}`;
twof.textContent = `Com duas casas decimais: ${num.toFixed(2)}`;


