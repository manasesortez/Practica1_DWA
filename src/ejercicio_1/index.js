/**
 * Ejercicio 1
 * Crear un programa que calcule unidades de medidas como Pies, 
 * Pulgadas, y Yardas. Ingresar el dato en metros para hacer 
 * la conversión.
 */

 var getPies = function(){
    var metrosPies = document.getElementById("value-meters").value;
    var resultado1 = 0;
    var pies = 3.28084;

    resultado = metrosPies * pies;
    document.getElementById("resultado").innerText= metrosPies + " mtr es igual a " + resultado +" pies";

}

var getPulgadas = function(){
    var metrosPulgada = document.getElementById("value-meters").value;
    var resultado1 = 0;
    var pulgadas = 39.3701;

    resultado1 = metrosPulgada * pulgadas;
    document.getElementById("resultado").innerText= metrosPulgada + " mtr es igual a " + resultado1 +" pulg";

}

var getYardas = function(){
    var metrosYardas = document.getElementById("value-meters").value;
    var resultado2 = 0;
    var yardas = 1.09361;

    resultado2 = metrosYardas * yardas;
    document.getElementById("resultado").innerText= metrosYardas + " mtr es igual a " + resultado2 +" yard";

}