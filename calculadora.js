console.log(process.argv)
function calcular(operacion, numUno, numDos) {

    if (numUno === "help") {
        return "Ejemplos para dividir 5 d 5, multiplicar 5 '*' 5, sumar 5 + 5, restar 5 - 5"
    }

    const a = Number(numUno);
    const b = Number(numDos);
    if (operacion === "+") {
        return "El resultado es: " + (a + b);
    } else if (operacion === "-") {
        return "El resultado es: " + (a - b);
    } else if (operacion === "d") {
        return "El resultado es: " + (a / b);
    } else if (operacion === "*") {
        return "El resultado es: " + (a * b);
    }
    else {
        return "Error solo soy una calculadora basica, escriba help para mas detalles";
    }
}

const operacion = process.argv[3];
const numUno = process.argv[2];
const numDos = process.argv[4];
console.log(operacion);
console.log(calcular(operacion, numUno, numDos));

