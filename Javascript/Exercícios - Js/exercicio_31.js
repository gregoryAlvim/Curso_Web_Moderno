// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function quantidadeNegativos (vetor) {
    qtdNegativos = 0
    for ( let i = 0; i < vetor.length; i++ ) {
        if ( vetor[i] < 0 ) {
            qtdNegativos++
        }
    }
    console.log(qtdNegativos)
}

vetor = [1, -2, -2, -2, -2, -2, 3]
quantidadeNegativos(vetor)