/*EJERCICIO 3 - Espera
En un consultorio, calcular tiempo de espera según cantidad de turnos asignados sin atender.
Debemos conocer la cantidad de turnos que están en espera y el tiempo de espera promedio de cada uno.
*/
let pacientes = 5;
let minutos = 15;
function calcularTiempoDeEspera(){
return pacientes*minutos/60    
}
//console.log(calcularTiempoDeEspera());

let lista = ["jose","carlos","martin","federico"]

/*
EJERCICIO 2 - Cuotas
Crear un función que tome como parámetros un precio de un producto o servicio, y la cantidad de meses a pagar (6 o 12). 
Calcule cuotas fijas con 5% de interés si es a 6 meses, y con 7% de interés si es a 12 meses.
En cualquiera de las 2 opciones debe informar por consola la cantidad de cuotas y el valor.*/

let play5 = 800;
let opcion1 = 6 ;
let opcion2=  12;
function calcularCuotas(precio,meses){
    if(meses===6){
let cuotas=precio/meses*1.05
cuotas=Math.round(cuotas*100)/100
console.log("6 cuotas de $"+cuotas)
    }
    
    if(meses===12){
        let cuotas=precio/meses*1.07
        cuotas=Math.round(cuotas*100)/100
        console.log("12 cuotas de $"+cuotas)
            }
       }
calcularCuotas(play5,opcion2)
