"use strict"

const alumnos = [
    {
        nombre: "Julieta",
        edad: 27,
    },
    {
        nombre: "Lucas",
        edad: 23,
    },
    {
        nombre: "Andrés",
        edad: 33,
    },
    {
        nombre: "Maria",
        edad: 18,
    },
]

console.log("La cantidad de alumnos es: " + alumnos.length)

let promedio = 0;
for (let index = 0; index < alumnos.length; index++) {
    promedio = promedio + alumnos[index].edad
}

console.log("El promedio de edad de los alumnos es de: " + (promedio / alumnos.length))