// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

function encontraPares () {
    let pares = []
    let i = 1
    while ( i < 101 ) {
        if ( i % 2 == 0) {
            pares.push(i)
        }
        i++
    }
    console.log(pares)
}

encontraPares()