/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var vApellido;
	//Declarecion constante
	const cNombre = "Nacho";
	//Declaracion variable
	var vNombre;
	//Asignando datos a la variable
	vNombre = prompt("Nombre","Ingrese un nombre");
	vApellido = prompt("Apellido","Ingrese Apellido")
	alert("Hola " + vNombre +" "+ vApellido);

	//Pisando una variable
	vNombre = "sol";
	
	alert(vNombre);
}

