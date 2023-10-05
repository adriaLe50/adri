/*EJERCICIO 3 - Espera
En un consultorio, calcular tiempo de espera segun cantidad de turnos asignados sin atender.
Debemos conocer la cantidad de turnos que estan en espera y el tiempo de espera promedio de cada uno.
*/
//DATOS
let tiempoProm = 15;
let pacientesQueLlegaronAlConsultorio = 15;
let turnosAtendidos = 10;
let turnosEnEspera = pacientesQueLlegaronAlConsultorio - turnosAtendidos

function tiempoDeEspera(){
    return (turnosEnEspera * tiempoProm) / 60;
}
//ejecutamos la funcion y guardamos lo que nos devuelve en la variable " resultado"
//lo que la funcion devuelva es el resultado de la isntruccion de la linea donde esta "return"
let resultado = tiempoDeEspera()
//console.log("Su tiempo de espera es :" + resultado + " hs")

//Array--> conjunto
let lista = ["Carlos","Jose", "Martin","Federico"];

//objeto--> cada objeto es un paciente
let paciente1 ={
    nombre: "Carlos",
    hora: 14
}
let paciente2 ={
    nombre: "Jose",
    hora:15
}
let paciente3 ={
    nombre:"Martin",
    hora:16
    }
 let paciente4 ={
    nombre: "Federico",
    hora :  17
 }   

 //Array de objetos
 let listaDePacientes = [paciente1, paciente2,paciente3,paciente4];
 let digaSuNombre = prompt("Ingrese su nombre");
 

//INDEX:
//0    1   2   3
//ORDEN EN QUE LO LEEMOS:
//1° 2° 3° 4°

//Entre la linea 54 y la 66 esta declarada la funcion mostarPacientes()
// contiene un bucle que recorre el array listaDePacientes de 1 en 1 mediante el contador (index) del bucle
//En cada iteracion tenemos un condicional  que analiza si el nombre ingresado mediante digaSuNombre es igual al valor de la propiedad "nombre" del objeto (paciente) analizado esa iteracion
//Si el nombre ingresado coincide con uno nombres de pacientes regsitrados, entonces devuelve un mensaje de salida con la hora de su turno
//Si el paciente no esta registrado (no existe en el array)entonces le avisa que no tiene turno pero que como excepcion se lo  atendera en determinado sobreturno.
//Luego en la linea 73 tenemos la "Llamada" o "Invocacion" de la funcion. si  se llama a la funcion, esta no se ejecuta,solo queda declarada mas arriba perosin hacer ninguna accion.

function mostrarPacientes(){
    for(let i = 0; i<=3; i++){
        let persona = listaDePacientes[i]
    
        if((persona["nombre"] === digaSuNombre)){
            alert("Su turno es a las " + persona.hora)
            console.log("Su turno es a las " + persona.hora +"hs")
        }else{
            alert ("Usted no tiene turno")
            alert ("Como excepcion , le asiganamos un turno a las 18 hs")
            alert (" El valor del turno es de 1000$")
            }
        }
}

mostrarPacientes()