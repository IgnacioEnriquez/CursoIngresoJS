function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    var resultado;

    precio = prompt("Inserte precio aqui");
    descuento = prompt("Inserte porcentaje de descuento aqui");
    precioFinal = (precio*descuento)/100;
    resultado = precio - precioFinal;

    document.getElementById("elPrecioFinal").value = resultado ;


}
