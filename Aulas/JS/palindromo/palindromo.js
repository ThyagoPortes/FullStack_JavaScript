/*const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)*/

const palavra = prompt("informe a palavra: ")

let palavrainvertida = ""

for (let i = palavra.length -1; i>=0; i--) {

    palavrainvertida += palavra[i]
    console.log(palavrainvertida) 
}

if (palavra === palavrainvertida) {

    alert("A palavra" + palavra + " é um palindromo")
    
} else {
    alert("não é um palindromo")
}