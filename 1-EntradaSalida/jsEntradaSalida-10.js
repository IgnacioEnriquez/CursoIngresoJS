/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numero;
	var resultado;
	var descuento;
	var resultado;  

	numero= document.getElementById("importe").value;

	parseInt(numero);

	descuento = (25 * parseInt(numero) ) / 100;

	resultado = numero - descuento; 

	document.getElementById("resultado").value = resultado ;

}
