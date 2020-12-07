// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

const valorAnuidadeAssociacao = function (mes, valor) {
    let capitalInicial = valor
    let taxaJuros = 0.05 // Taxa de juros fixa por mês
    let tempoAplicação = mes

    if ( mes > 0 && mes < 13 ) {
        montante = capitalInicial * (Math.pow(1 + taxaJuros, tempoAplicação - 1))

        return montante.toFixed(2).toString().replace(".", ",")

    } else {

        return 'Mês inválido!'
        
    }
}

valorAnuidadeAssociacao(4, 100)