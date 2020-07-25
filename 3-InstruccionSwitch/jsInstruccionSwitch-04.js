function mostrar() {
	let vMes

	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {

		case "Febrero":
			alert("Tiene 28 dias.")
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias.")
			break;
		default:
			alert("Tiene 31 dias.")
			break;

	}






	/*
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	*/




}//FIN DE LA FUNCIÓN