//¿Que se puede guardar en un array? 
// const datos = ["string", 55465,true,[],{}]

// console.log(datos[2])



// const edadesAlumnos = [18, 20, 25, 19, 35, 50]

// let largoArray = edadesAlumnos.length
// // console.log(largoArray)
// let sumaTotal = 0

// for (const suma of edadesAlumnos) {
//     sumaTotal = sumaTotal + suma
// }

// console.log(sumaTotal/largoArray)


// filtrarPorLongitudMayorA(longitud, palabras)
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

// function filtrarPorLongitudMayorA(longitud, palabras){

//     let filtro = []
//     for (const pal of palabras) {
//         if (pal.length > longitud){
//             filtro.push(pal);
            
//         }
//     }
//     console.log(filtro)
// }


// filtrarPorLongitudMayorA(4, [
//   'dia',
//   'remolacha',
//   'azul',
//   'sorpresa',
//   'te',
//   'verde',
// ]) // ['remolacha', 'sorpresa', 'verde']



// var alumnosPresentes = ["Damian"]
// console.log(alumnosPresentes)

// //con push agregamos un elemento al final
// alumnosPresentes.push("Dylan")
// console.log(alumnosPresentes)

// //con unshift agregamos un elemento al principio
// alumnosPresentes.unshift("Camila")
// console.log(alumnosPresentes)

// //con pop elimina el ultimo elemento del array
// alumnosPresentes.pop()
// console.log(alumnosPresentes)

// //con shift elimina el primer elemento del array
// alumnosPresentes.shift()
// console.log(alumnosPresentes)



/// OBJETOS!!!!!///

// const alumnosArray = ["Dylan", "Castillo", 25, "Argentina"]
// console.log(alumnosArray[2])



// const alumnos = {
//     nombre: "Damian",
//     apellido: "Paredes",
//     edad: 23,
//     pais: "Japon"
// }
// console.log(alumnos.pais)
// console.log(`El alumno ${alumnos.nombre} tiene ${alumnos.edad} años y vive en ${alumnos.pais}`)

// const auto = {
//     marca: "Renault",
//     modelo: "Clio",
//     año: 2007,
//     km: 175550
// }

// Ejercicio para realizae

//Realizar un objeto que tenga toda la informacion de un futbolista (10 item) y luego realizar un consol.log que contenga toda la info pero bien desarrollada

// let futbolista = {
//     nombre: "Adrian",
//     apellido: "Martinez",
//     apodo: "maravilla",
//     equiposDondeJugo: ["Sol de America", "Libertad", "Cerro Porteño"],
//     equipoActual: "Instituto de Córdoba",
//     edad: 34,
//     delantero: true,
//     familiares:{
//         mama: "Susana",
//         papa: "Claudio"
//     }
// }

// console.log(`el ultimo equipo donde jugo antes de ${futbolista.equipoActual} fue ${futbolista.equiposDondeJugo[2]}`)

// console.log(futbolista.familiares.mama)


// var chocoTorta = {
//     ingredientes: ["Chocolinas", "Dulce de leche", "Crema"],
//     preparacion: {
//         pasoUno:"Mesclar dulce de leche con crema",
//         pasoDos: "Agregarlo a las Chocolinas"
//      },
//     coccion: false,
//     tiempoDePreparacion: 25
// }

// //Damian va a comprar los ingredientes
// console.log(`Damian compra ${chocoTorta.ingredientes[2]}`)

// //Dylan se encarga del pasoUno
// console.log(`Dylan el paso uno es ${chocoTorta.preparacion.pasoUno}`)

// //Emiliano pregunta si lleva coccion
// console.log(chocoTorta.coccion)

//                0  1  2
// const array = [{},{},{}]

// const ejemplo = ["hola", 25, true]

// console.log(ejemplo[1])

// const alumnos = [
//     {
//     nombre: "Dylan",
//     apellido: "Castillo",
//     edad: 25
//     },
//     {
//     nombre: "Damian",
//     apellido: "Paredes",
//     edad: 23
//     },
//     {
//     nombre: "Joaquin",
//     apellido: "Lobpreis",
//     edad: 27
//     }

// ]

// console.log(alumnos[0].nombre, alumnos[1].nombre, alumnos[2].nombre)
// let nombres = []

// for (const nombreAlumnos of alumnos) {
//    nombres.push(nombreAlumnos.edad)
// }

// console.log(nombres)

// let suma = 0

// for (const nombreAlumnos of alumnos) {
//    suma = suma + nombreAlumnos.edad
// }

// console.log(suma)


//Ejercicio: 
// realiza una playlist que sea una array de 5 canciones (que son objetos) las canciones deben tener nombre, banda (2 canciones tienen que ser de la misma banda), año, si es tu favorita(booleano)

//en todas usar forof
// consologuear todos los nombres de la canciones
// consologuear todas las bandas (pero si hay una repetida no mostrarlas dos veces)
// consologuar el nombre de tus canciones favoritas
// consologuear un promedio de los años