/*
Antes de começar vou deixar o que pesquisei no site: https://brasilescola.uol.com.br/matematica/numeros-complexos.htm

Conjugado: Seja Z = a + bi um número complexo, então z(cojugado) = a - bi

1-Adição de dois números complexos:
    z1 = a + bi
    z2 = c + di
    z1 + z2 = (a + c) + (b + d)i

2-Subtração de dois números complexos:
    z1 = a + bi
    z2 = c + di
    z1 - z2 = (a - c) + (b - d)i

3-Multiplicação de números complexos:
    z1 = a + bi
    z2 = c + di
    z1 · z2 = (ac – bd) + (ad + cb)i

4-Divisão de dois números complexos: Para realizarmos a divisão de dois números complexos, precisamos multiplicar a fração pelo conjugado do denominador para que fique bem definido o que é a parte real e o que é a parte imaginária.
    Z1 = a + bi
    Z2 = c + di
    Z1/Z2 = (Z1/Z2)*(z2/z2) 
*/

class NumeroComplexo {
    constructor(parteReal, parteImaginaria) {
        this.real = parteReal
        this.imaginaria = parteImaginaria
    }

    calcularConjugado() {
        return new NumeroComplexo(this.real, -this.imaginaria)
    }

    somar(outroComplexo) {
        const realResultado = this.real + outroComplexo.real
        const imaginariaResultado = this.imaginaria + outroComplexo.imaginaria
        return new NumeroComplexo(realResultado, imaginariaResultado)
    }

    subtrair(outroComplexo) {
        const realResultado = this.real - outroComplexo.real
        const imaginariaResultado = this.imaginaria - outroComplexo.imaginaria
        return new NumeroComplexo(realResultado, imaginariaResultado)
    }

    multiplicar(outroComplexo) {
        const realResultado = this.real * outroComplexo.real - this.imaginaria * outroComplexo.imaginaria
        const imaginariaResultado = this.real * outroComplexo.imaginaria + this.imaginaria * outroComplexo.real
        return new NumeroComplexo(realResultado, imaginariaResultado)
    }

    dividir(outroComplexo) {
        const divisorConjugado = outroComplexo.calcularConjugado()
        const resultadoMultiplicacao = this.multiplicar(divisorConjugado)
        const denominadorReal = outroComplexo.real ** 2 + outroComplexo.imaginaria ** 2
        const realResultado = resultadoMultiplicacao.real / denominadorReal
        const imaginariaResultado = resultadoMultiplicacao.imaginaria / denominadorReal
        return new NumeroComplexo(realResultado, imaginariaResultado)
    }

    imprimir() {
        console.log(`Parte Real: ${this.real}`)
        console.log(`Parte Imaginária: ${this.imaginaria}`)
    }
}

// Exemplo de uso com três números complexos
const num1 = new NumeroComplexo(3, 2)
const num2 = new NumeroComplexo(1, 4)
const num3 = new NumeroComplexo(5, -3)

console.log("Soma dos três números complexos:")
num1.somar(num2).somar(num3).imprimir()

console.log("\nSubtração dos três números complexos:")
num1.subtrair(num2).subtrair(num3).imprimir()

console.log("\nMultiplicação dos três números complexos:")
num1.multiplicar(num2).multiplicar(num3).imprimir()

console.log("\nDivisão dos três números complexos:")
num1.dividir(num2).dividir(num3).imprimir()
