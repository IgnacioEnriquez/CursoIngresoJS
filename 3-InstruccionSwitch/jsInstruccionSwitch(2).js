function mostrar()
{
var invierno  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
        case "Enero":
        case "Febrero":
        case "Mayo":
        case "Abril":
        case "Junio":
        alert("Falta para el invierno");
        break;

        case "Julio":
        case "Agosto":
        alert("Abrigate que hace frio");
        break;

    default:
    alert("Ya pasamos el frio,hace calor");
        break;
}
  




}