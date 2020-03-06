function mostrar()
{
	var notas;
	var sexo;
	var contador = 0; 
	var acumulador = 0;
	var promedioNotasTotales;
	var primeraVez = true;
	var minNota;
	var sexoMin;
	var acumuladorVarones = 0;

	while(contador < 5){

   do{
		notas = prompt("Ingresa su calificacion")
		notas = parseInt(notas);

	}while(isNaN(notas) || notas < 0 || notas > 10);

	do{
		sexo = prompt("Ingresa un sexo");

	} while (sexo != "f" && sexo != "m");

		acumulador+=notas
		contador ++

		if(primeraVez){
			primeraVez = false;

			minNota = notas;
			sexoMin = sexo;

		} else if (notas < minNota){
			minNota = notas;
			sexoMin = sexo;
		}

		if(sexo = "m" && notas >= 6){
			acumuladorVarones++;
		}






	}


	promedioNotasTotales = acumulador / contador;


	alert( "El promedio de notas es " + promedioNotasTotales);
	alert("La nota minima es " + minNota + " Y su sexo es " + sexoMin);
	alert("La cantidad de varones aprobados es " + acumuladorVarones);





 




}
  
