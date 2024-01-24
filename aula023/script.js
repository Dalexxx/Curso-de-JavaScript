/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"
*/

function falaOi() {
    return 'Oi';
}

let vaiExecutar = false;

console.log(0 || false || null || 'David Alex' || true);

const corUser = 'marelo';
const corPadrao = corUser || 'preto';

console.log(corPadrao)