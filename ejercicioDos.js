"use strict"
const palabra = "aeiou rtv";
let convertido = "";
for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "e" || palabra[i] === "a" || palabra[i] === "o" || palabra[i] === "u" || palabra[i] === "i") {
        console.log(palabra[i])
        convertido = convertido + "i";
    } else {
        convertido = convertido + palabra[i];
    }

}
console.log("String original: " + palabra)
console.log("String con todas sus vocales convertidas en (i): " + convertido)