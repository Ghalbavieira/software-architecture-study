"use strict";
/* Pattern: Singleton
    Garante a criação de uma única instância de uma classe através de toda a aplicação,
    mantendo um ponto global de acesso ao seu objeto


    Singleton: Estrutura principal

    - método construtor privado (Garantir que vc tenha somente um objeto durante toda sua classe)
    - Método 'getInstance' responsável por criar o objeto
        - Ele verifica se o objeto existe, caso contrário cria
    - Possui outros métodos como uma classe qualquer


    Singleton: Not thread safe vs Thread safe

    - Padrão 'original' singleton não é thread safe o que pode ser grave.
    - Existem formas de contornar o problema através de variações desse padrão.

    *** singleton gera um alto acoplamento e com acesso global de um objeto, você pode não conseguir
    controlar todas as alterações e dificuldades para trabalhar com testes

*/
// Exemplo
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);
