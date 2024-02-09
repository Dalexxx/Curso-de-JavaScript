/*
Object.values (retorna os valores)
Object.entries (retorna as chaves e os valores)
Object.getOwnPropertyDescriptor(o, 'prop') mostra os defineproperty/ies
Object.assign(des, any) copia um objeto
... (spread) copia tbm

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

for(let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}