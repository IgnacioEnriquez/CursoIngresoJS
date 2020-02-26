function mostrar()
{
 numero = prompt("ingrese un numero");
 numero = parseInt(numero);
 contadorPares = 0 ;

 for(var contador = 0; contador < numero ;contador++){
     if(contador%2 == 0){
         console.log(contador);
         contadorPares++;
     }
     
     }
     alert("La cantidad de pares es " + contadorPares);
 }



//FIN DE LA FUNCIÓN