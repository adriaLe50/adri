let listasDePacientes = [{
    nombre: "Carlos",
    hora :14
}, {
    nombre:"Jose",
    hora: 15
}, { 
     nombre:"Martin",
     hora: 16
},{
     nombre:"Federico",
     hora:17
}];

listasDePacientes.push({
    nombre: "Juan Manuel",
    hora:13
})  
//console.log("pacientes: " + listaDePacientes)

listasDePacientes.unshift({
    nombre: "Fabian",
    hora:12
});
//console.log(listaDePacientes)
//console.table(listaDePacientes)

//listaDePacientes.pop();
//console.log(listaDePacientes)

//listaDePacientes.splice(1, 2);
//console.log(listaDePacientes)


//metodo join()
function verSoloNombres(arr){
    const nombres = []
    for (const paciente of listasDePacientes ){
        nombres.push(paciente.nombre);
    }
    
    console.log(nombres.join(","))
    }
    //verSoloNombres(listaDePacientes)

    //otra forma de ver solo nombres, con el metodo forEach()
    const verNombresConForEach = ()=>{
        listasDePacientes.forEach((element)=> console.log(element["nombre"]))
    }
    //verNombresConForeach()
    
    //metodo concat()
    const nuevosPacientes = [{
        nombre: "Mariano",
        hora:14
    },  {
        nombre: "Roberto",
        hora:19
    }]
    //listaDePacientes = listaDePacientes.concat(nuevosPacientes);
    //console.log(listaDePacientes)
    
    //metodo slice()
    const recorteDeLista = listasDePacientes.slice(2, 5);
    //console.log(recorteDeLista)


    //metodo indexOf()
    const listaSimplificada =["Fabian","Carlos","Jose","Martin","Federico","Juan Manuel"]
    const posicionMartin = listasDePacientes.indexOf('Martin')
    const posicionRoberto = listasDePacientes.indexOf('Roberto')
    //console.log(posicionMartin)
    //console.log(posicionRoberto)

    //metodo includes()
    //console.log(listaSimplificada).includes("Martin"));
    //console.log(listaSimplificada).includes("Roberto"));

    //metodo reverse()
    const listaAlreves = listaSimplificada;
    //console.log(listaAlReves.reverse())
    

    


    

