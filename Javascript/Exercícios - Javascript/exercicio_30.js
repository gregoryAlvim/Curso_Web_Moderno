// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maiorEMenorNumero (vetor) {
    let maiorNumero
    let menorNumero
    for ( let i = 0; i < vetor.length; i++ ) {
        if (maiorNumero === undefined && menorNumero === undefined) {
            maiorNumero = vetor[i]
            menorNumero = vetor[i]
        } else {
            if (vetor[i] > maiorNumero){
                maiorNumero = vetor[i]
            }

            if (vetor[i] < menorNumero){
                menorNumero = vetor[i]
            } 
        }
    }
    console.log(`Maior número: ${maiorNumero}, Menor número: ${menorNumero}`)   
}

let vetor = [2, 5, 88]
maiorEMenorNumero(vetor)