function mostrar()
{

var contador = 0;
	var acumulador = 0;
	var respuesta = true;

	while(respuesta){
		var numero = prompt("ingrese un numero");
		 numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Error : Ingrese un numero valido");
			numero = parseInt(numero);
		}
		contador++;
         respuesta = confirm ("Desea continuar?");
		acumulador+= numero;
	}

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN