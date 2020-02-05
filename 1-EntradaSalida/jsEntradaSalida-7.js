/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
  var numero1
  var numero2
  var resultadoSuma

  var numero1 = document.getElementById("numeroUno").value;
  var numero2 = document.getElementById("numeroDos").value;

  parseInt(numero1);

  parseInt(numero2);

  resultadoSuma = parseInt(numero1) + parseInt(numero2);

  alert(resultadoSuma);

}

function restar()
{
  var numero1
  var numero2
  var resultadoResta

  var numero1 = document.getElementById("numeroUno").value;
  var numero2 = document.getElementById("numeroDos").value;

  parseInt(numero1);

  parseInt(numero2);

  resultadoResta = parseInt(numero1) - parseInt(numero2);

  alert(resultadoResta);
}

function multiplicar()
{
  var numero1
  var numero2
  var resultadoMultiplicacion

  var numero1 = document.getElementById("numeroUno").value;
  var numero2 = document.getElementById("numeroDos").value;

  parseInt(numero1);

  parseInt(numero2);

  resultadoMultiplicacion = parseInt(numero1) * parseInt(numero2);

  alert(resultadoMultiplicacion);

}

function dividir()
{
  var numero1
  var numero2
  var resultadoDivision

  var numero1 = document.getElementById("numeroUno").value;
  var numero2 = document.getElementById("numeroDos").value;

  parseInt(numero1);

  parseInt(numero2);

  resultadoDivision = parseInt(numero1) % parseInt(numero2);

  alert(resultadoDivision);

}

