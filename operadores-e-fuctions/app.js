const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero)
    if(!resultado) {
        console.log('Número informado não válido!')
    }
    return resultado  
    
}

const validarOperador = (operador) => {
    switch(operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador
        default:
            console.log('Operador informado é inválido!')
            return null
    }
}

readLine.question('Favor informar um número: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1)

    if (numeroValidado1) {
        readLine.question('Favor informar outro número: ', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2)

            if (numeroValidado2) {
                readLine.question('Fovor informar um operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador)
                    if (operadorValidado) {
                        switch(operadorValidado) {
                            case '+' : console.log(`Operador selecionado, adição, resultado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`)
                                break
                            case '-' : console.log(`Operador selecionado, subtração, resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`)
                                break
                            case '/' : console.log(`Operador selecionado, divisão, resultado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`)
                                break
                            case '*' : console.log(`Operador selecionado, multiplicação, resultado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`)
                                break
                            case '%' : console.log(`Operador selecionado, módulo, resultado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`)
                                break
                            default: break
                        }
                    }
                })
            }
        })
    }
})
