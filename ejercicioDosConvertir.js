"use strict"
const texto = "aeiou rtv"
let contadorDeVocales = 0;
for (let index = 0; index < texto.length; index++) {
    /*
    if (texto[index] === "e") {
        contadorDeVocales++;
    } else if (texto[index] === "a") {
        contadorDeVocales++;
    } else if (texto[index] === "o") {
        contadorDeVocales++;
    } else if (texto[index] === "u") {
        contadorDeVocales++;
    } else if (texto[index] === "i") {
        contadorDeVocales++;
    }
*/
    if (texto[index] === "e" || texto[index] === "a" || texto[index] === "o" || texto[index] === "u" || texto[index] === "i") {
        contadorDeVocales++;
    }
}


let c = 0;
while (c < texto.length) {
    if (texto[c] === "e" || texto[c] === "a" || texto[c] === "o" || texto[c] === "u" || texto[c] === "i") {
        contadorDeVocales++;
    }
    c++;
}


console.log("La cantidad de vocales del texto es de: " + contadorDeVocales)


