function getUser(){
	user = JSON.parse(sessionStorage.getItem('user'));
	if (user==null){
		user = "USER";
		sessionStorage.setItem('user', JSON.stringify(user));
	}
	return user;
}

function validarUser(name){
	if(name==""){
		alert("Usuário não pode ser vazio");
		return false;
	}
	
	return true;
	
}

function cadastrarUser(name, nascimento, idade){
	if (validarUser(name) && cadastrarNascimento(nascimento) && cadastrarIdade(idade)){
		sessionStorage.setItem('user', JSON.stringify(name));
		window.location.assign("index.html");
	}
}

function getNascimento(){
	nascimento = JSON.parse(sessionStorage.getItem('nascimento'));
	if (nascimento==null){
		nascimento = "0000";
		sessionStorage.setItem('nascimento', JSON.stringify(nascimento));
	}
	return nascimento;
}

function validarNascimento(ano){
	
	if(ano==""){
		alert("Ano não pode ser vazio");
		return false;
	}

	if(ano.length > 4){
		alert("Ano digitado não é válido");
		return false;
	}

	anoInt = parseInt(ano);

	if(isNaN(anoInt)){
		alert("Ano digitado não é válido");
		return false;
	}
	
	return true;
	
}

function cadastrarNascimento(ano){
	if (validarNascimento(ano)){
		sessionStorage.setItem('nascimento', JSON.stringify(ano));
		return true;
	}

	return false;
}

function getIdade(){
	idade = JSON.parse(sessionStorage.getItem('idade'));
	if (idade==null){
		idade = "0";
		sessionStorage.setItem('idade', JSON.stringify(idade));
	}
	return parseInt(idade);
}

function validarIdade(idade){
	nascimento = getNascimento();
	anoAtual = 2016; // preguiça de recuperar a data do computador. Alterar depois

	idadeBase = anoAtual - parseInt(nascimento);
	
	if (idade==""){
		alert("Idade não pode ser vazio");
		return false;
	}

	if (isNaN(parseInt(idade))){
		alert("Idade digitada não é um número");
		return false;
	}

	if (parseInt(idade) < idadeBase - 1 || parseInt(idade) > idadeBase){
		alert("Idade inválda");
		return false;
	}
	
	return true;
	
}

function cadastrarIdade(idade){
	if (validarIdade(idade)){
		sessionStorage.setItem('idade', JSON.stringify(idade));
		return true;
	}

	return false;
}

function altUser(){
	window.location.assign("inicial.html");
}