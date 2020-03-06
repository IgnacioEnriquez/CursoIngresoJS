function mostrar()
{
	var respuesta = true;
	var letra;
	var numero;
	var contadorNumerosPares = 0;
	var contadorNumerosImpares = 0;
	var contadorCeros = 0;
	var contadorPositivos = 0;
	var acumuladorPositivos = 0;
	var promedioDePositivos = 0;
	var acumuladorNegativos = 0;
	var primeraVez = true;
	var maxNumero;
	var minNumero;
	var letraMax;
	var letraMin;

	while(respuesta){ 

	do{
		letra = prompt("Ingrese una letra");

	} while(!isNaN(letra)){;
	}
		do{
			numero = prompt("ingrese un numero mayor a -100 y menor a 100");
			numero = parseInt(numero);

		} while(numero < -100 || numero > 100){
		}


		if(numero % 2 == 0) {
			contadorNumerosPares++;
		} else {
			contadorNumerosImpares++;
		}

		if(numero == 0){
			contadorCeros++;
		}

		if(numero > 0){
			contadorPositivos++;
			acumuladorPositivos += numero;
		} else {
			acumuladorNegativos+= numero 
		}

		if(primeraVez){
			primeraVez = false;
			maxNumero = numero;
			letraMax = letra;
			minNumero = numero;
			letraMin = letra;
		} else if (numero > maxNumero){
			maxNumero = numero ;
			letraMax = letra ;
		} else if (numero < minNumero){
			minNumero = numero;
			letraMin = letra;
		}




         respuesta = confirm("Desea continuar?");
   }
      promedioDePositivos = acumuladorPositivos / contadorPositivos;

      document.write("La cantidad de numeros pares es " + contadorNumerosPares + "<br>")
      document.write("La cantidad de numeros impares es " + contadorNumerosImpares + "<br>")
      document.write("La cantidad de numeros ceros " + contadorCeros + "<br>")
      document.write("El promedio de positivos es " + promedioDePositivos + "<br>")
      document.write("La suma de todos los negativos es " + acumuladorNegativos + "<br>")
      document.write("El numero maximo es " + maxNumero + " y la letra max es " + letraMax  +"<br>");
      document.write("El numero minimo es " + minNumero + " y la letra min es " + letraMin  +"<br>"); 
      






	}



	


