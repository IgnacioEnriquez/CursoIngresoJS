function mostrar()
{
var numeroUno;
var numeroDos;
var resta;
var suma;

numeroUno = prompt("Inserte el primer numero");
numeroDos = prompt("Inserte el segundo numero");
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);

if(numeroUno == numeroDos){
    alert(numeroUno+numeroDos);
} else if(numeroUno > numeroDos){   
    resta = numeroUno - numeroDos;
    alert(resta);
} else {
    suma = numeroUno + numeroDos;
    alert(suma);
}
 if(suma > 10 ){
     alert("La suma es " + suma + " y supero al 10");
 }

}
