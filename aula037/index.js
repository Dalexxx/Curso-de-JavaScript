// For clássico = Geralmente com iteráveis (array ou strings)
// For in = Retorna o índice ou chave (string, array ou objetos)
// For of = Retorna o valor em si (iteráveis, arrayz ou strings)

const nome = ['Luiz', 'Otávio', 'David', 'Alex']

for (let i in nome){
    console.log(nome[i])
}

console.log('--------')

for (let valor of nome) {
    console.log(valor)
}

console.log('--------')

nome.forEach(function (valor, indice, array) {
    console.log(valor, indice, array)
});