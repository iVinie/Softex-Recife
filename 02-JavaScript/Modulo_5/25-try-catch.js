const prompt = require('prompt-sync')()
try {
    // Solicita ao usuário que insira dois números
    const numero1 = parseFloat(prompt("Digite o primeiro número: "))
    const numero2 = parseFloat(prompt("Digite o segundo número: "))
  
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Os valores inseridos não são números válidos.")
    }
  
    const resultado = numero1 / numero2
  
    if (isNaN(resultado) || !isFinite(resultado)) {
      throw new Error("Ocorreu um erro na divisão.")
    }
  
    console.log(`O resultado da divisão é: ${resultado}`)
  } catch (error) {
    console.error(`Erro: ${error.message}`)
  } finally {
    console.log("Finalizando a execução.")
  }
  