/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroRandom ;
var numero1 ;
var max ;
var min ;
var contador;

function comenzar()
{
   max = 101
   min = 1

   numeroRandom = Math.floor(Math.random() * (max - min)) + min ;
	 
	alert("el numero es " + numeroRandom);

}

function verificar()
{
  numero1 = document.getElementById("numero").value;

  if(numeroRandom == numero1){
  	alert("Usted es un ganador!!! y en solo X intentos");

  } else if (numero1 > numeroRandom){
  	alert("Se paso...");


  }else{
  	alert("Falta...");
  }

	
}