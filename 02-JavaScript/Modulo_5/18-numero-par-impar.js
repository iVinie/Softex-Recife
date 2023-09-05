function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "O número é par."
    } else {
      return "O número é ímpar."
    }
  }
  
  console.log(verificarParOuImpar(4))
  console.log(verificarParOuImpar(7))
  console.log(verificarParOuImpar(0)) 