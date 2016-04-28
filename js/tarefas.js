var listaTarefas = ["abc","123"];

function show_alert(x){
	alert(x);
}

function atualizar_lista(){
	var out = "<tr><td>TAREFA</td></tr>"
	for (var i = listaTarefas.length - 1; i >= 0; i--) {
		out += "<tr><td>" + listaTarefas[i] + "</td></tr>"
	};
	document.getElementById('tarefas').innerHTML = out;
}

function adicionar_item(descricao){
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
		atualizar_lista();
	}
}