// Definindo a interface Strategy
class OperationStrategy {
    execute(a, b) {
      throw new Error("Método execute deve ser implementado pelas subclasses")
    }
  }
  
  // Classe concreta para operação de soma
  class AddStrategy extends OperationStrategy {
    execute(a, b) {
      return a + b
    }
  }
  
  // Classe concreta para operação de subtração
  class SubtractStrategy extends OperationStrategy {
    execute(a, b) {
      return a - b
    }
  }
  
  // Classe concreta para operação de multiplicação
  class MultiplyStrategy extends OperationStrategy {
    execute(a, b) {
      return a * b
    }
  }
  
  // Classe concreta para operação de divisão
  class DivideStrategy extends OperationStrategy {
    execute(a, b) {
      if (b === 0) {
        throw new Error("Não é possível dividir por zero.")
      }
      return a / b
    }
  }
  
  // Função para realizar o cálculo com base na estratégia selecionada
  function calculate(a, b, strategy) {
    return strategy.execute(a, b)
  }
  
  // Input do usuário (por exemplo, soma)
  const operation = "soma" // Pode ser "soma", "subtracao", "multiplicacao" ou "divisao"
  const num1 = 10
  const num2 = 5
  
  let strategy
  
  // Selecionar a estratégia com base na operação informada
  switch (operation) {
    case "soma":
      strategy = new AddStrategy()
      break
    case "subtracao":
      strategy = new SubtractStrategy()
      break
    case "multiplicacao":
      strategy = new MultiplyStrategy()
      break
    case "divisao":
      strategy = new DivideStrategy()
      break
    default:
      console.log("Operação não suportada")
      break
  }
  

  if (strategy) {
    const result = calculate(num1, num2, strategy)
    console.log(`Resultado da ${operation}: ${result}`)
  }
  