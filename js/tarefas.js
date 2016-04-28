function show_alert(x){
	alert(x);
}

function atualizar_lista(){
	listaTarefas = JSON.parse(sessionStorage.getItem('tarefas'));
	if (listaTarefas==null){
		listaTarefas = ["Adicione novas tarefas"];
		sessionStorage.setItem('tarefas', JSON.stringify(listaTarefas));
	}
	var out = "<tr><td>TAREFA</td></tr>"
	for (var i = listaTarefas.length - 1; i >= 0; i--) {
		out += "<tr><td>" + listaTarefas[i] + "</td></tr>"
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
		atualizar_lista();
	}
}