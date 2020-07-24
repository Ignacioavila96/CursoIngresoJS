function mostrar()
{
	let vMax=10;
	let vMin=1;
	let vNota;
	
	vNota = parseInt(Math.round(Math.random()*(vMax-vMin)+vMin));

	if ((vNota==9) || (vNota==10)) 
	{	
		alert("Nota= " + vNota + " " + "EXCELENTE")
	}
	else
	{
		if ((vNota<9) && (vNota>=4))
		{
			alert("Nota= " + vNota + " " + "APROBÓ")
		}
		
		else
		{	
			alert("Nota= " + vNota + " " + "Vamos, la proxima se puede")
		}
	}	

	//Genero el número RANDOM entre 1 y 10 
	//alert("ok");

}//FIN DE LA FUNCIÓN