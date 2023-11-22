class SistemaSeguranca {
  private static instancia: SistemaSeguranca;
  private senhaBaseSecreta: string = "senhaSuperSecreta";

  private constructor() {}

  public static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta.");
    } else {
      console.log("Acesso negado. Senha incorreta.");
    }
  }
}

// Programa principal
const agenteSecreto = SistemaSeguranca.getInstance();

// Tentativa de acesso com senha correta
agenteSecreto.acessarBaseSecreta("senhaSuperSecreta");

// Tentativa de acesso com senha incorreta
agenteSecreto.acessarBaseSecreta("senhaIncorreta");
