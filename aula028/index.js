// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia);
// const data = new Date(1706188236328);
// console.log('Dia', data.getDate())
// console.log('MÊs', data.getMonth() + 1)
// console.log('ano', data.getFullYear())
// console.log('Horas', data.getHours())
// console.log(Date.now())

// console.log(data.toString());

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);