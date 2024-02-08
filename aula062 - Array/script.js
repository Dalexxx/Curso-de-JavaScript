// revisão do básico em Arrays

//               0          1          2
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2];
nomes.push('David');
nomes.push('Alex');
nomes.pop();
console.log(nomes);

const noma = 'David Alex Souza Santos';
const names = noma.split(' ');
console.log(names);
const nomesunidos = names.join(' ');
console.log(nomesunidos);