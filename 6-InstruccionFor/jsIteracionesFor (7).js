function mostrar()
{
    numero = prompt("ingrese un numero");
    numero = parseInt(numero);
    contadorDivisores = 0;

    for(contador=0 ;contador < numero ; contador++){
        if(numero/contador >= 1){
            console.log(contador);
            contadorDivisores++;

        }


    }
    alert("la cantidad de divisores es " + contadorDivisores ); 

    }




//FIN DE LA FUNCIÓN