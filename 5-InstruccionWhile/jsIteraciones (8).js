function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta = true;

	while(respuesta){
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)){
		var numero = prompt ("El numero es incorrecto");
		numero = parseInt(numero);
	 }
	 respuesta = confirm("Desea continuar?");

	 if(numero >= 0){
	 	positivo = numero + positivo;

	 } else {
	 	negativo = numero * negativo;
	 }

	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN