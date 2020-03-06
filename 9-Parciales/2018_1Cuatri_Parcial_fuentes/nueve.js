function mostrar()
{
	var respuesta = true;
	var marca;
	var peso;
	var temperatura;
	var contadorParesTemperatura = 0;
	var primeraVez = true;
	var marcaMaxima;
	var pesoMaximo;
	var cantidadDeFrios = 0;
	var cantidadDePeso = 0;
	var acumuladorDePeso = 0 ;
	var promedioDePeso;
	var pesoMinimo;

	while(respuesta){
		marca = prompt("Ingrese una marca");

		do{
			peso = prompt("Ingrese el peso del producto");
			peso = parseInt(peso);

		} while(isNaN(peso)|| peso < 1 || peso > 100);

		cantidadDePeso++;
		acumuladorDePeso += peso;


		do{
			temperatura = prompt("Ingrese la temperatura del producto");
			temperatura = parseInt(temperatura);
		} while(isNaN(temperatura) || temperatura < -30 || temperatura > 30);


		if(temperatura %2 == 0) {
			contadorParesTemperatura++;
		}

		if(primeraVez){
			primeraVez = false;
			marcaMaxima = marca;
			pesoMaximo = peso;
			pesoMinimo = peso;

		} else if(peso > pesoMaximo){
			marcaMaxima = marca;
			pesoMaximo = peso;

		} else if(peso < pesoMinimo){
			pesoMinimo = peso;
		}

		if(temperatura < 0){
			cantidadDeFrios++;
		}














		respuesta = confirm("Desea continuar?");
	}

	promedioDePeso = acumuladorDePeso / cantidadDePeso;


	document.write("Las temperaturas pares son " + contadorParesTemperatura ) <br>

}
