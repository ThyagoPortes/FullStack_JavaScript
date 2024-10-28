const atacante = prompt('Nome do Atacante')
const ataque = prompt('Qual poder de ataque?')

const defensor = prompt('Nome do Defensor')
let life = prompt('Quantidade de HP')
const defesa = prompt('Quantidade de defesa')
const escudo = prompt('Tem escudo SIM ou NÃO?')

let dano  = 0

if ( ataque > defesa && escudo === "NÃO")
{
  dano = ataque - defesa
  life = life - dano
} else if ( ataque > defesa && escudo === "SIM"){
    dano = (ataque - defesa) / 2 
    life = life - dano

 }

 alert("Atacante: " + atacante +
    "\n Ataque: " + ataque +
    "\nDefensor: " + defensor + 
    "\nLIFE: " + life + 
    "\n Defesa: " + defesa +
    "\nEscudo: " + escudo +
    "\nDano: " + dano )


