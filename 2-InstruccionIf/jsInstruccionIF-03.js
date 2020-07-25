function mostrar() {
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	//tomo la edad  
	if (vEdad >= 18) {
		alert("Es Mayor de edad");
	}
	else {
		alert("Es Menor de edad");
	}
}//FIN DE LA FUNCIÓN