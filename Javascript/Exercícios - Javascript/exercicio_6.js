// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const jurosCompostos = function (capitalInicial, taxaJuros, tempoAplicação) {
    let montante = 0
    montante = capitalInicial * (Math.pow(1 + taxaJuros, tempoAplicação))

    console.log(`O montante da aplicação financeira é: R$ ${montante.toFixed(2).toString().replace(".", ",")}`)
}

const jurosSimples = function (capitalInicial, taxaJuros, tempoAplicação) {
    let montante = 0
    montante = (capitalInicial * taxaJuros * tempoAplicação) + capitalInicial

    console.log(`O montante da aplicação financeira é: R$ ${montante.toFixed(2).toString().replace(".", ",")}`)
}

jurosCompostos(1400, 0.07, 2)
jurosSimples(10, 0.01, 9)