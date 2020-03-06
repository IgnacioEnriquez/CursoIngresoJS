function mostrar()
{
	var respuesta = true;
	var letra;
	var numero;
	var contadorNumerosPares = 0;
	var contadorNumerosImpares = 0;
	var contadorCeros = 0;

	while(respuesta){

		letra = prompt("Ingrese una letra");

		do{
			numero = prompt("ingrese un numero mayor a -100 y menor a 100");
			numero = parseInt(numero);

		} while(numero < -100 || numero > 100);


		if( numero % 2 == 0) {
			contadorNumerosPares++;
		} else {
			contadorNumerosImpares++;
		}

		if(numero == 0){
			contadorCeros++;
		}









     respuesta = confirm("Desea continuar?");
	}

	

}
