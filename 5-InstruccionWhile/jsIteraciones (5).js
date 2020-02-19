function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "m" && sexo != "f" ){
	sexo = prompt("Ingrese el sexo Correctamente");
	sexo = sexo.toLocaleLowerCase();
}


document.getElementById('Sexo').value=sexo;
alert("Sexo Elegido Correctamente");

}//FIN DE LA FUNCIÓN