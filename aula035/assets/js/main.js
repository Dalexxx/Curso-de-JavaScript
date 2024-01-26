const container = document.querySelector('.container')

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

for (let i = 0; i < elementos.length; i++) {
    container.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`
}

// container.innerHTML += `<p>${elementos[0].texto}</p>`
// container.innerHTML += `<div>${elementos[1].texto}</div>`
// container.innerHTML += `<footer>${elementos[2].texto}</footer>`
// container.innerHTML += `<section>${elementos[3].texto}</section>`






