const nome_turista = prompt("nome do turista: ")

let visitou_cidade = prompt("Visitou alguma cidade? sim ou não ")
var cidades = []
let = contador = 0


while ( visitou_cidade === 'sim'){
   let cidade_visitada = prompt("informe o nome da cidade visita")
    cidades.push(cidade_visitada)
    visitou_cidade = prompt("Visitou outra "+
    "cidade? sim ou não " ) 
    contador +=1
}

alert("\nCidades visitadas:\n" + "\n " + contador + 
    "\n" + cidades )