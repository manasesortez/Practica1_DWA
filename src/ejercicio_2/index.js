/**
 * Ejercicio 2 
 * Crear un programa que solicite un número y muestre las tablas de 
 * múltiplicar.*
 */


 var getNumber = function(){
    var numero = document.getElementById("value-number").value;
    document.write("<body style='background-color:powderblue;'>");
    document.write("<h3 style='margin-left:45%;'> La tabla del " + numero + " es </h3>");
    document.write("<table border='1' style='margin-left:45%; color=#fff;'><tr><td>Número</td><td>Resultado</td></tr>");
    for(i=1; i<=10; i++){
        document.write("<tr><td>"+numero+" x " + i +"</td><td>" + numero * i + "</td></tr>");
    }
document.write("</table>");
document.write("</body>");

}


