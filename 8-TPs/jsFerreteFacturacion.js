/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
    var producto1
    var producto2
    var producto3
    var resultado

    producto1 = document.getElementById("PrecioUno").value; 

    producto2  = document.getElementById("PrecioDos").value; 

    producto3 = document.getElementById("PrecioTres").value; 

    parseInt(producto1);

    parseInt(producto2);

    parseInt(producto3);

    resultado = parseInt(producto1) + parseInt(producto2) + parseInt(producto3) ;

    alert(resultado);
}
function Promedio () 
{ 
    var producto1
    var producto2
    var producto3

    producto1 = document.getElementById("PrecioUno").value; 

    producto2  = document.getElementById("PrecioDos").value; 

    producto3 = document.getElementById("PrecioTres").value; 

    var resultado2

    resultado2 = (parseInt(producto1) + parseInt(producto2) + parseInt(producto3) ) / 3 ;
    
    alert(resultado2);
}
function PrecioFinal () 
{
    var producto1;
    var producto2;
    var producto3;
    var resultado3;
    var iva;
    var final;

    producto1 = document.getElementById("PrecioUno").value; 

    producto2  = document.getElementById("PrecioDos").value; 

    producto3 = document.getElementById("PrecioTres").value;

    resultado3 = parseInt(producto1) + parseInt(producto2) + parseInt(producto3) ;

    iva = (resultado3 * 21) / 100 ;

    final = resultado3 + iva ;

    alert(final);
    
    console.log(final);
	
}