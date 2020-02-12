function mostrar()
{	var numeroRandom
	var max
	var min

	max = 11
	min = 1

	numeroRandom = Math.floor(Math.random() * (max - min)) + min ;
	
if( numeroRandom >= 9) {
	alert( numeroRandom + "-EXCELENTE");
} else if(numeroRandom >4){
	alert( numeroRandom + " -APROBO");
} else {
	alert( numeroRandom + " -Vamos la proxima se puede");
}
	
}