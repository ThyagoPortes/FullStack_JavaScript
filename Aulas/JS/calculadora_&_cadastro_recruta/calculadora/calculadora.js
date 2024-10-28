const x = prompt("informe o primeiro número ")
const y = prompt("informe o segundo número")

const calculo_1 = parseFloat(x)

const calculo_2 = parseFloat(y)

soma = calculo_1 + calculo_2
sub = calculo_1 - calculo_2
multi = calculo_1 * calculo_2
div = calculo_1 / calculo_2

alert( "\n soma: " + soma + 
       "\n subtração: " + sub + 
       "\n multiplicaçâo:" + multi + 
       "\n divisâo:" + div
)