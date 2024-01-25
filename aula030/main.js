const container = document.querySelector('.container');

function getdayWeek (weekday) {
    let dayText;

    switch (weekday){
    case 0:
        dayText = 'Domingo';
        return dayText
    case 1:
        dayText = 'segunda';
        return dayText
    case 2:
        dayText = 'terça';
        return dayText
    case 3:
        dayText = 'quarta';
        return dayText
    case 4:
        dayText = 'quinta';
        return dayText
    case 5:
        dayText = 'sexta';
        return dayText
    case 6:
        dayText = 'sábado';
        return dayText
    default:
        dayText = 'dia inválido';
        return dayText
    }
}

function getMonthsepa (month) {
    let monthText;

    switch (month) {
    case 0:
        monthText = 'Janeiro';
        return monthText
    case 1:
        monthText = 'Fervereiro';
        return monthText   
    case 2:
        monthText = 'Março';
        return monthText
    case 3:
        monthText = 'Abril';
        return monthText
    case 4:
        monthText = 'Maio'
        return monthText
    case 5:
        monthText = 'Junho'
        return monthText
    case 6:
        monthText = 'Julho'
        return monthText
    case 7:
        monthText = 'Agosto'
        return monthText
    case 8:
        monthText = 'Setembro'
        return monthText
    case 9:
        monthText = 'Outubro'
        return monthText
    case 10:
        monthText = 'Novembro'
        return monthText
    case 11:
        monthText = 'Dezembro'
        return monthText
    }
}

const data = new Date();
dia = data.getDay();
diweek = data.getDate();
mes = data.getMonth();
ano = data.getFullYear();
horas = data.getHours();
min = data.getMinutes();

container.innerHTML = `<h1>${getdayWeek(dia)}, ${diweek} de ${getMonthsepa(mes)} de ${ano}<br>${horas}:${min}</h1>`