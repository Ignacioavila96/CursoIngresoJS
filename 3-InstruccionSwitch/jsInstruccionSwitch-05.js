function mostrar()
{
	let vHora;

	vHora = parseInt(document.getElementById("txtIdHora").value);

	switch (vHora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		default:
			alert("No es de mañana");
			break;
	}

	
	
	/*
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	alert(horaDelDia);
	*/
	

}//FIN DE LA FUNCIÓN