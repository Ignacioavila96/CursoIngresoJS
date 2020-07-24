function mostrar()
{
	let vEdad;
	let vCivil;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vCivil = document.getElementById("estadoCivil").value;

	if ((vEdad<18) && (vCivil!="Soltero")) 
		{
			alert("Es muy pequeño para NO ser soltero.");
		}

	//tomo la edad  
	//alert("ok");

}//FIN DE LA FUNCIÓN