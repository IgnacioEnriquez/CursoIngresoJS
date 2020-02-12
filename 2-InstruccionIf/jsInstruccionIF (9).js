function mostrar()
{
	var numeroRandom;
	var min;
	var max;

	min = 1;
	max = 11;

	numeroRandom = Math.floor(Math.random() * (max - min)) + min ;
	
	alert(numeroRandom);
	

}//FIN DE LA FUNCIÓN