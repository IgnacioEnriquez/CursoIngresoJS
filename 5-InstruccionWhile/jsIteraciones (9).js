function mostrar()
{

	var contador=0;
	var respuesta ='true';
	var primeraVez;
	var maximo;
	var minimo;

	while(respuesta){
		var numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Numero Incorrecto,Ingrese uno nuevo")
			numero = parseInt(numero);
		}

		respuesta = confirm("Quiere continuar?");

		if(primeraVez){
			primeraVez = false;

			maximo = numero;
			minimo = numero;

 
		} else if {
		}

	}

	




}//FIN DE LA FUNCIÓN