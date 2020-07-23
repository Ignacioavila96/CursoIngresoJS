function mostrar()
{
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);

	if (vEdad>=18) 
		{
			alert("Es mayor de edad")
		}	
		
	if ((vEdad<18) && (vEdad>12)) 
		{	
		alert("Es adolescente")
		}
	
	if (vEdad<13)	
		{
		alert("Es niño")
		}
	
	
	
	
		//tomo la edad  
	//alert("ok");



}//FIN DE LA FUNCIÓN