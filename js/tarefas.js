function idFromUrl(){
	return window.location.search.substring(4)
}

function atualizar_lista(){
	listaTarefas = JSON.parse(sessionStorage.getItem('tarefas'));
	if (listaTarefas==null){
		listaTarefas = ["Adicione novas tarefas"];
		sessionStorage.setItem('tarefas', JSON.stringify(listaTarefas));
	}
	var out = "<tr><td>TAREFA</td></tr>"
	for (var i = listaTarefas.length - 1; i >= 0; i--) {

		out += "<tr><td><input type='checkbox' name='tarefa'><label for='tarefa'><a href='tarefa.html?id=" + i + "'>" + listaTarefas[i] + "</a></label></td></tr>"
	};
	document.getElementById('tarefas').innerHTML = out;
}

function adicionar_item(descricao){
	listaTarefas = JSON.parse(sessionStorage.getItem('tarefas'));
	if(descricao==""){
		alert("Descricao Inválida");
	}else{
		for (var i = listaTarefas.length - 1; i >= 0; i--) {
			if(listaTarefas[i]==descricao){
				alert("Tarefa já existe");
				return
			}
		};
		listaTarefas.push(descricao);
		sessionStorage.setItem('tarefas', JSON.stringify(listaTarefas));
		redirecionar();
	}
}

function tarefa(){
	listaTarefas = JSON.parse(sessionStorage.getItem('tarefas'));
	document.getElementById('tarefa').innerHTML = listaTarefas[idFromUrl()];
}

function redirecionar(){
	window.location.assign("tarefas.html")
}