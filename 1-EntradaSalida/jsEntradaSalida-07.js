/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var vNum1;
	var vNum2;
	var vRes
	vNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	vRes = vNum1+vNum2;
	
	alert(`La suma es ${vRes}`);	
}

function restar()
{
	var vNum1;
	var vNum2;
	var vRes
	vNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	vRes = vNum1-vNum2;
	
	alert(`La resta es ${vRes}`);	
}

function multiplicar()
{ 
	var vNum1;
	var vNum2;
	var vRes
	vNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	vRes = vNum1*vNum2;
	
	alert(`La multiplicacion es ${vRes}`);	
}

function dividir()
{
	var vNum1;
	var vNum2;
	var vRes
	vNum1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	vNum2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
	vRes = vNum1/vNum2;
	
	alert("La divicion es "+ vRes.toFixed(2));	// toFixed para decimales (entre parentesis para limitar cantidad de decimales)
}

