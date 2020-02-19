/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var numeroRandom
var numeroRandom2
var max
var min                  //1suma 2resta 3division 4multiplicacion
var maxCuenta
var minCuenta 
var cuenta 
var resultado
var resultadoUsuario

function comenzar()
{
	max = 11;
	min = 1;
	maxCuenta = 5
	minCuenta = 1

	numeroRandom1 = Math.floor(Math.random() * (max - min)) + min ;
	numeroRandom2 = Math.floor(Math.random() * (max - min)) + min ;
	cuenta = Math.floor(Math.random() * (maxCuenta - minCuenta)) + minCuenta ;

	document.getElementById("PrimerNumero").value = numeroRandom1;
	document.getElementById("SegundoNumero").value = numeroRandom2;

	if(cuenta == 1){
		document.getElementById("Operador").value = "Suma";
       resultado = numeroRandom1 + numeroRandom2;
	} else if (cuenta == 2){
		document.getElementById("Operador").value = "Resta" ;
		resultado = numeroRandom1 - numeroRandom2;
	}else if (cuenta == 3){
		document.getElementById("Operador").value = "Division" ;
		resultado = numeroRandom1 / numeroRandom2;
	} else {
	   document.getElementById("Operador").value = "multiplicación" ;
	   resultado = numeroRandom1 * numeroRandom2;
	} 

}//FIN DE LA FUNCIÓN
function Responder()
{
 resultadoUsuario = document.getElementById("Respuesta").value;

 if(resultadoUsuario == resultado){
 	alert("El resultado es correctisimo");
 } else{
 	alert("El resultado esta erradisimo papu");
 }
 	

}