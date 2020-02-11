function mostrar()
{
    var edad

    edad = document.getElementById("edad").value;

    if(edad > 18) {
        alert("Usted es mayor de edad");
    } else { 
        alert("usted no es mayor de edad");
    }


}