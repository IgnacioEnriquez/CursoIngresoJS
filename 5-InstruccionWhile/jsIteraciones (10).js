function mostrar()
{

	var contador = 0;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioDePositivos = 0;
	var promedioDeNegativos = 0 ;
	var diferenciaPositivosYNegativos 
    var numero;

	do{
	do{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

	} while( isNaN(numero));

	 if (numero > 0 ){
	 	sumaPositivos += numero;
	 	contadorPositivos++;

	 }else if (numero <0){
	 	sumaNegativos += numero;
	 	contadorNegativos++;

	 }else {
	 	contadorCeros++;
	 }

	 if (numero %2 == 0){
	 	contadorPares++;
	 }  
	 respuesta = confirm ("Desea continuar?");
	} while (respuesta);

	if(contadorNegativos != 0){
		
	promedioDeNegativos = sumaNegativos / contadorNegativos;	
	} else if (contadorPositivos != 0) {

	promedioDePositivos = sumaPositivos / contadorPositivos;	
	}

	promedioDeNegativos = sumaNegativos / contadorNegativos;

	diferenciaPositivosYNegativos = sumaPositivos - sumaNegativos;

	document.write("Suma de positivos : " + sumaPositivos + "<br>");
	document.write("Suma de Negativos : " + sumaNegativos + "<br>");
	document.write("Cantidad de positivos : " + contadorPositivos + "<br>");
	document.write("Cantidad de negativos : " + contadorNegativos + "<br>");
	document.write("Cantidad de Ceros : " + contadorCeros + "<br>");
	document.write("Cantidad de Pares : " + contadorPares + "<br>");
	document.write("promedio de positivos : " + promedioDePositivos + "<br>");
	document.write("promedio de Negativos : " + promedioDeNegativos + "<br>");
	document.write("Diferencia : " + diferenciaPositivosYNegativos + "<br>");


	 


	

} 
