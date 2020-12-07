// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaAritmetica (vetor) {
    somaNumerosVetor = 0
    for ( let i = 0; i < vetor.length; i++ ) {
        somaNumerosVetor += vetor[i]
    }
    console.log(`Média aritmética: ${somaNumerosVetor / vetor.length}`)
}



vetor = [5, 10, 20, 100, 200]
vetor2 = [14, 12, 15, 18, 16]
mediaAritmetica(vetor)
mediaAritmetica(vetor2)