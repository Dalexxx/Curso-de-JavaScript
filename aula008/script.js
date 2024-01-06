/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 35;
const peso = 84;
const alturaEmM = 1.80; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

anoNascimento = 2024 - idade
indiceMassaCorporal = peso / (alturaEmM * alturaEmM)

console.log(`Seu nome é ${nome} ${sobrenome}, você tem ${idade}anos,
pesa ${peso}kg e tem ${alturaEmM}m de altura.`)
console.log(`logo, seu IMC é ${indiceMassaCorporal.toFixed(1)} e você nasceu em ${anoNascimento}`)