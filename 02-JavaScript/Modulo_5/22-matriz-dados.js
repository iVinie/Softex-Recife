//Podemos criar um array de objetos
let dados = [{nome: "José", idade: 19, salario: 1900, EMC: true}, {nome: "David", idade: 22, salario: 2500, EMC: false}, {nome: "Maria", idade: 25, salario: 3400, EMC: true}, {nome: "Igor", idade: 18, salario: 2100, EMC: false}]

//Ou uma Matriz:
let dadosMatriz = [["nome", "idade", "salario", "EMC"], ["José", 19, 1900, true], ["David", 22, 2500, false], ["Maria", 25, 3400, true], ["Igor", 18, 2100, false]]
console.log(dados)
console.log('--------')
console.table(dadosMatriz)