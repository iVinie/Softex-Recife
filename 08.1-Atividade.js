const prompt = require('prompt-sync')()
let media = 0
for (let i = 1; i <= 3; i++){
    let nota = Number(prompt(`Qual a ${i}° nota: `))
    while(isNaN(nota) || nota < 0 || nota > 10){
        nota = Number(prompt(`Nota invalida! Qual a ${i}° nota: `))
    }
    media += nota
}
media /= 3
let resultado = media >= 7 ? 'APROVADO' : 'REPROVADO'
console.log(`Você está ${resultado}!`)