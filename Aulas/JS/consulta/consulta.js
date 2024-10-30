let fila = []

do {
    let paciente = ''
    for ( let contador = 0; contador < fila.length; contador++) {
        paciente += (contador+1) + 'º' + fila[contador] + '\n'
    }

    opcao = prompt("Fila de paciente" + " \n" + paciente +
        "\n [1] Adicionar paciente a fila de espera:" +
        "\n [2] Atender o proximo paciente da fila:" +
        "\n [3] Sair:")

    switch (opcao) {
        case '1':
            let novopaciente = prompt("Qual o nome do novo paciente?")
            /*fila.push('\n' + contador + "º" + novopaciente)*/
            fila.push(novopaciente)
            break;

        case '2':
            if (fila.length > 0) {
                let paciente_atendido = fila.pop()
                alert(paciente_atendido + "Atendido")
            } else {
                alert("Nenhum cliente na fila de espera")
            }

            break;
        case '3':
            alert("saindo...")
            break;

        default:
            break;
    }


} while (opcao !== "3");