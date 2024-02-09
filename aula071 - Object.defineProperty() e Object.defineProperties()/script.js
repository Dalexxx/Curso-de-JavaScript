// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //vai mostrar?
        value: estoque, //valor
        writable: true, //pode ser alterar o valor?
        configurable: true // pode ser configurável
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //vai mostrar?
            value: nome, //valor
            writable: true, //pode ser alterar o valor?
            configurable: true // pode ser configurável
        },
        preço: {
            enumerable: true, //vai mostrar?
            value: preco, //valor
            writable: true, //pode ser alterar o valor?
            configurable: true // pode ser configurável
        },
    });
}

const p1 = new Produto('camiseta', 20, 3);
console.log((p1));

for(let chave in p1) {
    console.log(chave)
}