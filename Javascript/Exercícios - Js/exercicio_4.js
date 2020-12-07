// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

const dividindo = function (dividendo, divisor) {
    console.log(`Dividir ${dividendo} por ${divisor} igual a: ${dividendo / divisor}.`);
    console.log(`Modulo: ${dividendo % divisor}.`)
}

dividindo(5, 2);

dividindo(5, 5);


