function getUser(){
	user = JSON.parse(sessionStorage.getItem('user'));
	if (user==null){
		user = "USER";
		sessionStorage.setItem('user', JSON.stringify(user));
	}
	return user;
}

function validarTarefa(name){
	user = getUser();
	
	if(name==""){
		alert("Usuário não pode ser vazio");
		return false;
	}
	
	return true;
	
}

function cadastrarUser(name){
	listaTarefas = getUser();
	if (validarTarefa(name)){
		sessionStorage.setItem('user', JSON.stringify(name));
		window.location.assign("index.html");
	}
}