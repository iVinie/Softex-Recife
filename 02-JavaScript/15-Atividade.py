"""
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
"""

class NumeroComplexo:
    def __init__(self, parte_real, parte_imaginaria):
        self.real = parte_real
        self.imaginaria = parte_imaginaria
    #calcular_conjugado(): Calcula o conjugado do número complexo, trocando o sinal da parte imaginária.
    def calcular_conjugado(self):
        return NumeroComplexo(self.real, -self.imaginaria)
    #somar(outro_complexo): Realiza a adição entre dois números complexos.
    def somar(self, outro_complexo):
        real_resultante = self.real + outro_complexo.real
        imaginaria_resultante = self.imaginaria + outro_complexo.imaginaria
        return NumeroComplexo(real_resultante, imaginaria_resultante)
    #subtrair(outro_complexo): Realiza a subtração entre dois números complexos.
    def subtrair(self, outro_complexo):
        real_resultante = self.real - outro_complexo.real
        imaginaria_resultante = self.imaginaria - outro_complexo.imaginaria
        return NumeroComplexo(real_resultante, imaginaria_resultante)
    #multiplicar(outro_complexo): Realiza a multiplicação entre dois números complexos.
    def multiplicar(self, outro_complexo):
        real_resultante = self.real * outro_complexo.real - self.imaginaria * outro_complexo.imaginaria
        imaginaria_resultante = self.real * outro_complexo.imaginaria + self.imaginaria * outro_complexo.real
        return NumeroComplexo(real_resultante, imaginaria_resultante)
    #dividir(outro_complexo): Realiza a divisão entre dois números complexos.
    def dividir(self, outro_complexo):
        divisor_conjugado = outro_complexo.calcular_conjugado()
        resultado_multiplicacao = self.multiplicar(divisor_conjugado)
        denominador_real = outro_complexo.real ** 2 + outro_complexo.imaginaria ** 2
        real_resultante = resultado_multiplicacao.real / denominador_real
        imaginaria_resultante = resultado_multiplicacao.imaginaria / denominador_real
        return NumeroComplexo(real_resultante, imaginaria_resultante)
    #imprimir(): Este método imprime as partes real e imaginária do número complexo.
    def imprimir(self):
        print(f"Parte Real: {self.real}")
        print(f"Parte Imaginária: {self.imaginaria}")

# Exemplo de uso
num1 = NumeroComplexo(3, 2)
num2 = NumeroComplexo(1, 4)
num3 = NumeroComplexo(5, -3)

soma = num1.somar(num2).somar(num3)
subtracao = num1.subtrair(num2).subtrair(num3)
multiplicacao = num1.multiplicar(num2).multiplicar(num3)
divisao = num1.dividir(num2).dividir(num3)


print("Soma:")
soma.imprimir()

print("\nSubtração:")
subtracao.imprimir()

print("\nMultiplicação:")
multiplicacao.imprimir()

print("\nDivisão:")
divisao.imprimir()
