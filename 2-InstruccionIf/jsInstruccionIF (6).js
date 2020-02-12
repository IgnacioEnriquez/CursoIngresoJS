function mostrar()
{
    var edad
    
    edad = document.getElementById("edad").value;

    if(edad < 13){
        alert("usted es Menor");
}
      
        if(edad < 18){
            if(edad >= 13){
                alert("Usted es un adolescente"); 
            }
        } else {
            alert("usted es Mayor");
        }
    




            

}//FIN DE LA FUNCIÓN