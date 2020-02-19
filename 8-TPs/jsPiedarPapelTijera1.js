/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var numeroRandom
var max
var min

function comenzar()
{
	

  max = 4
  min = 1

  numeroRandom = Math.floor(Math.random() * (max - min)) + min ;
  //1piedra 2papel 3tijera


} 
function piedra()
{  
	if(numeroRandom == 1){
	alert("Usted Empato");
} else if (numeroRandom == 2){
	alert("Usted Perdio");
} else {
	alert("Usted Gano");
}
	

}//FIN DE LA FUNCIÓN
function papel()
{
	if(numeroRandom == 2){
	alert("Usted Empato");
} else if (numeroRandom == 3){
	alert("Usted Perdio");
} else {
	alert("Usted Gano");}
}


function tijera()
{
	if(numeroRandom == 3){
	alert("Usted Empato");
} else if (numeroRandom == 1){
	alert("Usted Perdio");
} else {
	alert("Usted Gano");
} 
}
	//FIN DE LA FUNCIÓN