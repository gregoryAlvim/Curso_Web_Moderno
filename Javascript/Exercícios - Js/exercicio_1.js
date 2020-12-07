// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

const calcular = function(valor1, valor2) {
    return console.log (
        `| Soma: ${valor1 + valor2} |`,
        `Subtração: ${valor1 - valor2} |`,
        `Multiplicação: ${valor1 * valor2} |`,
        `Divisão: ${valor1 / valor2} |`
    )
}

calcular(2, 2)