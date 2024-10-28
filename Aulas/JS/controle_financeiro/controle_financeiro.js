money = 0
do {
op = prompt("Saldo: R$"+ money + "00" +
    "\n Escolha uma opção abaixo: " +
    "\n [1] add money " +
    "\n [2] remove money " +
    "\n [exit] saaaaaaaaair ")

    if ( op === 1){
    money = money + 100
    alert("money + 100" + money)
    }else if( op === 2){
    money = money - 100
    alert("money - 100" + money)
    }

} while (money = 10);