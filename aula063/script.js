// Método Splice
//              -5       -4          -3         -2       -1
//               0        1           2          3       4
const nomes = ['David', 'Daniel', 'Patrick', 'Breno', 'Vozes'];

//nomes.splice(índice, delete, elem1, elem2, elem3);
// pop = nomes.splice(-1, 1);
// shift = nomes.splice(0, 1);
// push = nomes.splice(nomes.length, 0, 'Luiz'); se n for add muitos, melhor usar push msm
//unshift = nomes.splice(0, 0, 'Alex');
const removidos = nomes.splice(4, 1, 'Joao'); //indice + quantos elementos quer remover + add se quiser
console.log(nomes, removidos);