/*
split(): Este método divide uma string em um array de substrings com base em um separador especificado.

toUpperCase(): Este método deixa a string toda em maiusculo.
*/

//Exemplo: 
const frase = "Olá, como vai você?"
const palavras = frase.split(" ") // Divide a frase em palavras usando o espaço como separador
console.log(palavras)

//Deixa em maiusculo
console.log(frase.toUpperCase())