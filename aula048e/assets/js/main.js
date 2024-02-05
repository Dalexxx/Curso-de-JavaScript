const inputTarefa = document.querySelector('.input-tarefa'); 
const btnTarefa = document.querySelector('.btn-tarefa'); 
const tarefas = document.querySelector('.tarefas');

// 3
function criaLi() { //função apenas para criar LI
    const liCreate = document.createElement('li');
    return liCreate;
}

//4
inputTarefa.addEventListener('keypress', function(e) { //função pro Enter
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return; //se campo vazio n envia nada
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
});

// 5
function limpaInput() { //limpa o input
    inputTarefa.value = '';
    inputTarefa.focus(); //pra focar no input msm dps de mandar o texto
}

//6
function criaBotaoApagar(li) {
    li.innerText += ' '; //deixar um espaço entre o botão e a tarefa
    const botaoApagar = document.createElement('button'); //cria o botão
    botaoApagar.innerText = 'Apagar'; //add um texto no botão
    botaoApagar.setAttribute('class', 'apagar'); //adiciona a classe apagar ao botao
    li.appendChild(botaoApagar);//add o botão ao li
}

// 2
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

// 1
btnTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return; //se campo vazio n envia nada
    criaTarefa(inputTarefa.value);
    limpaInput();
});

// 7
document.addEventListener('click', function(e) { //adicionar a função de apagar ao botão
    const el = e.target; //pega o que foi clicado
    if (el.classList.contains('apagar')) { //escolhe o botão
        el.parentElement.remove(); //remove o pai do elemento(itachi?)
        salvarTarefas();
        
    }
})

// 8
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); //pega todos os li do tarefas(as tarefas)
    const listaDeTarefas = []; //cria um array

    //iterar sobre as tarefas
    for (let tarefa of liTarefas) { 
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //substitui o texto do botão por nada e o .trim() pra remover espaços
        listaDeTarefas.push(tarefaTexto); //jogar esse texto na lista de tarefas(Array)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);//Criar uma string do array convertido para JSON
    localStorage.setItem('tarefas', tarefasJSON); //salva a string(só pode ser string) no navegador e adiciona um nome a essa string
    //localStorage é global do navegador e pode ser usado em qualquer lugar do código
}

// 9
function adicionaTarefasSalvar() {
    const tarefas = localStorage.getItem('tarefas'); //pegar as tarefas salvas anteriormente
    const listaDeTarefas = JSON.parse(tarefas); //converte as tarefas de volta para um array

    for (let tarefa of listaDeTarefas) { //adiciona as tarefas de novo
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvar() //chama a função