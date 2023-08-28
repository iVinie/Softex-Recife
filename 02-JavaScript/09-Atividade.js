const prompt = require('prompt-sync')()
let nome = prompt('Qual o seu nome? ')
let media = 0
if(!isNaN(nome)){
    console.log('Nome invalido!')
}else{
    for(let i = 1; i <= 3 ; i++){
        let nota = parseFloat(prompt(`Digite a ${i}º nota: `))
        while(isNaN(nota) || (nota < 0 || nota > 10)){
            console.log('Nota invalida')
            nota = parseFloat(prompt(`Digite a ${i}º nota: `))
        }
        media = media + nota
    }
    console.log(`Nome: ${nome}
Sua média foi: ${(media/3).toFixed(2)}`)
}
