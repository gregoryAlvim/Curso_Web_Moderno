// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.


const estoqueFrutas = (frutas) => {
    switch (frutas) {
        case 'Maçã':
            console.log('Não vendemos está fruta aqui')
            break
        case 'Kiwi':
            console.log('Estamos com escassez de Kiwis')
            break
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Deu eRrOoOo malucoo!')    
    }
}

estoqueFrutas('Maçã')
estoqueFrutas('Kiwi')
estoqueFrutas('Melancia')
estoqueFrutas()