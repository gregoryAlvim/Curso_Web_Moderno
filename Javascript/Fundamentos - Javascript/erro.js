function tratarErroELancar(erro) {
   // throw new Error('...')
   // Throw 10
   // Throw true
   // Throw 'mensagem'
}

function imprimirNomeGritando(obj) {
    try {
         console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {
    nome: 'Roberto'
} 
imprimirNomeGritando(obj)