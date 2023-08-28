function soma(num1, num2) {
    return num1 + num2
}
function subtracao(num1, num2) {
    return num1 - num2
}
function multiplicacao(num1, num2) {
    return num1 * num2
}
function divisao(num1, num2) {
    if (num2 === 0) {
        return "Divisão por zero!"
    } else {
        return num1 / num2
    }
}
function showMenu() {
    let option = prompt(`Qual operação deseja fazer? digite um dos simbolos: \nSoma: +\nSubtração: -\nMultiplicação: *\ndivisão: / `)
    switch (option) {
        case "+":
            let numSoma1 = Number(prompt("Qual o primeiro número? "))
            let numSoma2 = Number(prompt("Qual o segundo número? "))
            if (isNaN(numSoma1) || isNaN(numSoma2)) {
                console.log("Número invalido!")
            } else {
                console.log(`${numSoma1} + ${numSoma2} = ${soma(numSoma1, numSoma2)}`)
            }
            break
        case "-":
            let numSub1 = Number(prompt("Qual o primeiro número? "))
            let numSub2 = Number(prompt("Qual o segundo número? "))
            if (isNaN(numSub1) || isNaN(numSub2)) {
                console.log("Número invalido!")
            } else {
                console.log(`${numSub1} - ${numSub2} = ${subtracao(numSub1, numSub2)}`)
            }
            break;
        case "*":
            let numMult1 = Number(prompt("Qual o primeiro número? "))
            let numMult2 = Number(prompt("Qual o segundo número? "))
            if (isNaN(numMult1) || isNaN(numMult2)) {
                console.log("Número invalido!")
            } else {
                console.log(
                    `${numMult1} * ${numMult2} = ${multiplicacao(numMult1, numMult2)}`
                )
            }
            break
        case "/":
            let numDiv1 = Number(prompt("Qual o primeiro número? "))
            let numDiv2 = Number(prompt("Qual o segundo número? "))
            if (isNaN(numDiv1) || isNaN(numDiv2)) {
                console.log("Número invalido!")
            } else {
                console.log(`${numDiv1} / ${numDiv2} = ${divisao(numDiv1, numDiv2)}`)
                if(numDiv1%numDiv2 != 0){
                    console.log('O resto da divisão é: ' + numDiv1%numDiv2)
                }
            }
            break
        default:
            console.log('Opção invalida!')
    }
}
showMenu()