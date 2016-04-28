function idFromUrl(){
	return window.location.search.substring(4)
}

function getLista(){
	listaTarefas = JSON.parse(sessionStorage.getItem('tarefas'));
	if (listaTarefas==null){
		listaTarefas = ["Adicione novas tarefas no menu TAREFAS >> ADICIONAR"];
		sessionStorage.setItem('tarefas', JSON.stringify(listaTarefas));
	}
	return listaTarefas;
}

function validarTarefa(name, index){
	listaTarefas = getLista();
	if(name==""){
		alert("Tarefa não pode ser vazia");
		return false;
	}else{
		for (var i = listaTarefas.length - 1; i >= 0; i--) {
			if((listaTarefas[i]==name) && (i!=index) ){
				alert("Tarefa já existe");
				return false;
			}
		};return true;
	}
}

function getTarefa(id){
	listaTarefas = getLista();
	return listaTarefas[id];
}

function deleteTarefa(name){
	listaTarefas = getLista();
	var id = listaTarefas.indexOf(name);
	listaTarefas.splice(id,1);
	sessionStorage.setItem('tarefas', JSON.stringify(listaTarefas));
	redirecionar();
}

function updateTarefa(ant,newName){
	listaTarefas = getLista();
	var id = listaTarefas.indexOf(ant);
	if (validarTarefa(newName,id)){
		listaTarefas[id] = newName;
		sessionStorage.setItem('tarefas', JSON.stringify(listaTarefas));
		redirecionar();
	}
}

function atualizar_lista(){
	listaTarefas = getLista();
	var out = "<tr class='lista'><td colspan='2' class='headTable'>TAREFAS</td></tr>"
	for (var i = listaTarefas.length - 1; i >= 0; i--) {

		out += "<tr class='lista'><td><input type='checkbox' name='tarefa' id='tarefa'><label for='tarefa'><a href='tarefa.html?id=" + i + "'>" + listaTarefas[i] + "</a></label></td></tr>"
	};
	document.getElementById('tarefas').innerHTML = out;
}

function adicionar_item(name){
	listaTarefas = getLista();
	if (validarTarefa(name, -1)){
		listaTarefas.push(name);
		sessionStorage.setItem('tarefas', JSON.stringify(listaTarefas));
		redirecionar();
	}
}

function tarefa(){
	listaTarefas = getLista();
	document.getElementById('tarefa').innerHTML = listaTarefas[idFromUrl()];
}

function redirecionar(){
	window.location.assign("tarefas.html");
}

function altTarefa(id){
	out = "alterarTarefa.html?id=" + id;
	window.location.assign(out);
}

function excTarefa(id){
	out = "removerTarefas.html?id=" + id;
	window.location.assign(out);
}