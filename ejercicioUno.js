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

let promedio = 0

for (const alumno of alumnos) {
  promedio = promedio + alumno.edad
}

console.log(
  "El promedio de edad de los alumnos es de: " + promedio / alumnos.length
)
