// ? :
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';



console.log(nivelUsuario, corPadrao);