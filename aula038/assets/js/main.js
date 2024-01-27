const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for (let ps of p) {
    ps.style.backgroundColor = backgroundColorBody;
    ps.style.color = 'white'
}