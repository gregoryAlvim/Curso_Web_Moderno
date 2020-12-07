// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano | Aumento
//  A    | 10%
//  B    | 15%
//  C    | 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const aumentoSalarial = (salario, plano) => {
    switch (plano) {
        case 'A':
            console.log(`${salario * 1.10}`)
            break

        case 'B':
            console.log(`${salario * 1.15}`)
            break

        case 'C':
            console.log(`${salario * 1.20}`)
            break
        default:
            case 'A':
            console.log('Plano inválido')
    }   
}

aumentoSalarial(10, 'A')
aumentoSalarial(10, 'B')
aumentoSalarial(10, 'C')
aumentoSalarial(10, '')