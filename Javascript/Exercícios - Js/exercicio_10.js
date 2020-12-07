// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

const numeroDivisivelTres = (numero) => {
    if ( numero % 3 == 0 ) {
        return true
    } else {
        return false
    }
}

console.log(numeroDivisivelTres(10))