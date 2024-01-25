
function getDayWeekText (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Dom';
        return diaSemanaTexto
    case 1:
        diaSemanaTexto = 'seg';
        return diaSemanaTexto
    case 2:
        diaSemanaTexto = 'ter';
        return diaSemanaTexto
    case 3:
        diaSemanaTexto = 'qua';
        return diaSemanaTexto
    case 4:
        diaSemanaTexto = 'qui';
        return diaSemanaTexto
    case 5:
        diaSemanaTexto = 'sex';
        return diaSemanaTexto
    case 6:
        diaSemanaTexto = 'sab';
        return diaSemanaTexto
    default:
        diaSemanaTexto = 'dia inválido';
        return diaSemanaTexto
    }
}

const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDayWeekText(diaSemana);

console.log(diaSemana, diaSemanaTexto)

// week = ['Domingo', 'seg', 'Terça', 'Qua', 'Qui', 'Sex', 'Sáb']
// console.log(week[diaSemana])