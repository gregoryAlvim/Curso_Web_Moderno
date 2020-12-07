// ) O cardápio de uma lanchonete é o seguinte:
// Código | Descrição do Produto | Preço

//  100   | Cachorro Quente      | R$ 3,00
//  200   | Hambúrguer Simples   | R$ 4,00
//  300   | Cheeseburguer        | R$ 5,50
//  400   | Bauru                | R$ 7,50
//  500   | Refrigerante         | R$ 3,50
//  600   | Suco                 | R$ 2,80

// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

const totalDoPedido = (codigo, quantidade) => {
    switch (codigo) {
        case 100:
            console.log(`Cachorro Quente: quantidade: ${quantidade} | valor total: R$ ${(quantidade * 3).toFixed(2).toString().replace(".", ",")}`)
            break
        case 200:
            console.log(`Hambúrguer Simples: quantidade: ${quantidade} | valor total: R$ ${(quantidade * 4).toFixed(2).toString().replace(".", ",")}`)
            break
        case 300:
            console.log(`Cheseburguer: quantidade: ${quantidade} | valor total: R$ ${(quantidade * 5.50).toFixed(2).toString().replace(".", ",")}`)
            break
        case 400:
            console.log(`Bauru: quantidade: ${quantidade} | valor total: R$ ${(quantidade * 7.50).toFixed(2).toString().replace(".", ",")}`)
            break
        case 500:
            console.log(`Refrigerante: quantidade: ${quantidade} | valor total: R$ ${(quantidade * 2.50).toFixed(2).toString().replace(".", ",")}`)
            break
        case 600:
            console.log(`Suco: quantidade: ${quantidade} | valor total: R$ ${(quantidade * 2.80).toFixed(2).toString().replace(".", ",")}`)
            break
        default:
            console.log('Produto não existe')
    }   
}

totalDoPedido(100, 2)
totalDoPedido(200, 2)
totalDoPedido(300, 2)
totalDoPedido(400, 2)
totalDoPedido(500, 2)
totalDoPedido(600, 2)
totalDoPedido(700, 2)