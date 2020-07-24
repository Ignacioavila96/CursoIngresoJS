function mostrar()
{
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);

	if (vEdad>=18) 
		{
		alert("Es mayor de edad");
		}
			
		else
		{
			if ((vEdad<18) && (vEdad>=13)) 
			{	
			alert("Es adolescente");
			}


			else	
			{
			alert("Es niño");
			}
		}
		
		
		//tomo la edad  
	//alert("ok");



}//FIN DE LA FUNCIÓN