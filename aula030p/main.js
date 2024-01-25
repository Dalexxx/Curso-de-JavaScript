// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getdayWeek (weekday) {
//     let dayText;

//     switch (weekday){
//     case 0:
//         dayText = 'Domingo';
//         return dayText
//     case 1:
//         dayText = 'segunda';
//         return dayText
//     case 2:
//         dayText = 'terça';
//         return dayText
//     case 3:
//         dayText = 'quarta';
//         return dayText
//     case 4:
//         dayText = 'quinta';
//         return dayText
//     case 5:
//         dayText = 'sexta';
//         return dayText
//     case 6:
//         dayText = 'sábado';
//         return dayText
//     default:
//         dayText = 'dia inválido';
//         return dayText
//     }
// }

// function getMonthsepa (month) {
//     let monthText;

//     switch (month) {
//     case 0:
//         monthText = 'Janeiro';
//         return monthText
//     case 1:
//         monthText = 'Fervereiro';
//         return monthText   

//     }
// }

// function zeroEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function createDate () {
//     const dia = data.getDay();
//     const mes = data.getMonth();

//     const NameDay = getdayWeek(dia);
//     const NameMonth = getMonthsepa(mes);

//     return (
//         `${getdayWeek(dia)}, ${data.getDate()} de ${NameMonth}` +
//         ` de ${data.getFullYear()} ` +
//         `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
//         );
// }

// h1.innerHTML = createDate(data)

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'})



