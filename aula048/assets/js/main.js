const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

//fazer a tecla ENTER add também
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
        CriaBotaoApagar(li);
    }
});

//limpa o input(espaço pra digitar)
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();//pra continuar focado no input msm clicando no botão
}

function CriaBotaoApagar(li) {
    li.innerText += ' '; //dar um espaço entre a tarefa e o botão
    const botaoApagar = document.createElement('button'); //cria o botão
    botaoApagar.innerText = 'Apagar'; //add o nome no botão
    botaoApagar.setAttribute('class', 'apagar'); //atribuir uma classe ao botão
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); //add um textinho ao deixar o mouse em cima
    li.appendChild(botaoApagar); //adicionar o botão no li
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    CriaBotaoApagar(li);
    salvarTarefas();
}

//adicionar a tarefa
btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);   
});

//apagar a tarefa
document.addEventListener('click', function(e){ 
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); //remove o pai dele(itachi?)
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText; //pega o texto 
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //replace: trocar a palavra Apagar por nada. trim: remover espaços
        listaDeTarefas.push(tarefaTexto); //add no array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); //converter o array pra uma string JSON
    localStorage.setItem('tarefas', tarefasJSON); //'tarefas' como nome para salvar

}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); //pega os elementos salvos anteriormente
    const listaDeTarefas = JSON.parse(tarefas); //convertendo de volta para um arquivo JS
    
    for (let tarefa of listaDeTarefas) { //add as tarefas 
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas();