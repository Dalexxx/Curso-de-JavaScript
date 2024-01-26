// ... rest, ... spread - depende do contexto
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [first, , second, , thirty, , foutry, ...resto] = numeros;
console.log(first, second, thirty, foutry)
console.log(resto)