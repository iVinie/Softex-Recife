class MinhaClasse {
    // Método estático
    static metodoEstatico() {
      console.log('Não preciso de instância da classe para acessar')
    }
  
    // Método de instância
    metodoDeInstancia() {
      console.log('Esse eu preciso de instância')
    }
  }
  
  // Chamando o método estático diretamente na classe
  MinhaClasse.metodoEstatico()
  
  // Criando uma instância da classe e chamando o método de instância
  const objeto = new MinhaClasse()
  objeto.metodoDeInstancia()
