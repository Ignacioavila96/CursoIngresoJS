function mostrar() {
	let vMes;

	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
	}





	/*
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	*/



}//FIN DE LA FUNCIÓN