const prompt = require('prompt-sync')()
let somaNota = 0
for (let i = 1; i <= 2; i++){
    let nota = Number(prompt(`Qual a ${i}° nota: `))
    while(isNaN(nota) || nota < 0 || nota > 10){
        nota = Number(prompt(`Nota invalida! Qual a ${i}° nota: `))
    }
    somaNota += nota
}
let resultado = 21 - somaNota
let teste = resultado > 10 ? 'Já está reprovado! Precisa tirar mais de 10' : `Você precisa tirar ${resultado} na terceira prova`
console.log(teste)
