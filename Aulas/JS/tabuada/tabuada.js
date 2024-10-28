
let number = parseFloat(prompt("Olá, eu sou o Robô da tabuada!" +
                               "\nInforme o numero que deseja multiplicar : "))

let tabuada = ""

for (let index = 0; index < 21; index++) {
    
    tabuada += number + "*" + index + "=" + number*index + "\n"
}

alert(tabuada)


