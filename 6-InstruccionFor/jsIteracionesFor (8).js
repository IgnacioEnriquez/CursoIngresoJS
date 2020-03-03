function mostrar()
{
    var numero = prompt("Inserte un numero");
    numero = parseInt(numero);

    for(var contador = 0 ; contador < numero ; contador++){
        if (contador > 1 && numero % contador == 0) {
            alert("El numero es par");
            break;
               } else {
                   alert("El numero es Impar")
                   break;
               }
    } 



}//FIN DE LA FUNCIÓN