/* Mel Man */
// AJAX
// Método para usar ajax
function iniciarAjax(){
	let objetoAjax = false; // Variável que vai armazenar o objeto
	if(window.XMLHttpRequest){ // Firefox e demais Browsers
		objetoAjax = new XMLHttpRequest();
	}
	else if(window.ActiveXObject){
		try{
			objetoAjax = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e){
			try{
				objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				objetoAjax = false;
			}
		}
	}
	else{
		alert("Seu browser não suporta ajax");
	}
	return objetoAjax; //OOOOOOI, eu amo vcs!
}
function mostrarResposta(elemento, ajax){
	if (ajax.readyState==4) {
		if (ajax.status==200) {
			elemento.innerHTML= ajax.responseText;

		}else {
			alert("Arquivo não encontrado");
		}
	}
} 
function requisitarArquivo(arquivo, elemento) {
	let ajax = iniciarAjax();
	if (ajax) {
		ajax.onreadystatechange= function () {
			//executado quando o estado muda
			mostrarResposta(elemento,ajax); 
		};
	}
	ajax.open("GET", "bilu.html");
	ajax.send(null);
	//sempre tem que ter um open e um send
}
