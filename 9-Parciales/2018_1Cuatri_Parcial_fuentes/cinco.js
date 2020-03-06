function mostrar()
{
	var PlanetaUniverso = prompt("Inserta un planeta del sistema solar");

	switch(PlanetaUniverso){
		case "tierra":
		alert("Aca vivimos");
		break;

		case "mercurio":
		case "venus":
		alert("Aca hace mas calor");
		break;

		case "marte":
		case "saturno":
		case "jupiter":
		case "urano":
		case "neptuno":
		alert ("Aca hace mas frio");
		break;

		default:
		alert("El planeta es incorrecto o se escribio en mayuscula");
		break;
	} 

}
