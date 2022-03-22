const readLine = require('readline').createInterface( {
    input: process.stdin,
    output: process.stdout
} )

const minhaPrimeiraConstanteString = 'Minha primeira constante'
console.log(minhaPrimeiraConstanteString)

let leituraDeCampo
let teste = 'teste'
readLine.question('Informe sua idade: ', input => {
    leituraDeCampo = input
    console.log(`O usuário digitou: ${leituraDeCampo} e a minha varável de teste é: ${teste}`)
} )

