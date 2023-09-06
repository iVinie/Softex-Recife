/*
21-Atividade
luiza é desenvolvedora e está trabalhando com dois arrays. O primeiro é [23, 9, 4, 45] e o segundo é [7, 12]. Ela precisa dividir o primeiro em dois arrays e cada array gerado deve ser concatenado com o segundo array

1. Qual é o pacote que luiza precisa utilizar?
2. Se for preciso instalar esse pacote, qual é o comando que deve ser utilizado?
3. Qual é o comando para importar esse pacote?
4. Quais as funções utilizadas neste pacote?
5. Quais serão os arrays resultantes dessa operação?

Para realizar a Luiza pode utilizar o pacote "Lodash", uma biblioteca javascript popular para manipulação de array.

1- Luiza precisa do pacote Lodash para realizar a divisão e concatenação.
2- comando para instalação: npm i lodash
3- importação: const variavel = require('lodash')
4- funções utilizadas: 
	1-chunk() //Divide um array em pedaços do tamanho especifico
	2-concat() //Concatena arrays
5- Array resultante: [23, 9, 7, 12] e [4, 45, 7, 12]

*/


const _ = require('lodash')

const primeiroArray = [23, 9, 4, 45]
const segundoArray = [7, 12]

const arraysDivididos = _.chunk(primeiroArray, 2)
const resultado1 = _.concat(arraysDivididos[0], segundoArray)
const resultado2 = _.concat(arraysDivididos[1], segundoArray)

console.log(resultado1)
console.log(resultado2)