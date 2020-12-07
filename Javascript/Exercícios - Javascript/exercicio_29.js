// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function contador (vetorNumeros) {
    let qtdIntervalo = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] > 9 && vetorNumeros[i] < 21) {
            qtdIntervalo++
        }
    }
    console.log(qtdIntervalo)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
let vetor2 = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
contador(vetor)
contador(vetor2)