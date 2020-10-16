// Função em javascript é First-Class Object (Citizens)
// Higner-order function

// Criar de forma literal
function funcao1() {

}

// Armazenar em uma variável
const funcao2 = function () {

}

// Armazenar em um array
const array = [function (a, b) { return a + b}, funcao1, funcao2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const objeto = {}
objeto.falar = function () { return 'Opa' }
console.log(objeto.falar())

// Passar função como param
function run(funcao) {
    funcao()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar ou conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)

const somaMais = soma(2, 3)
somaMais(4)