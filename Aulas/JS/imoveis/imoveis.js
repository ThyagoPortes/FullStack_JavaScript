

do {
    
    const imoveis = [""]
    opcao = prompt("Imoveis cadastrados: " + imoveis.length +
        "\n [1] Adicionar imovel:" +
        "\n [2] lista imoveis:" +
        "\n [3] Sair:")



    switch (opcao) {
        case '1':
            const imovel = {}
            imovel.proprietario = prompt ("Qual nome do proprietario ? ")
            imovel.quarto = prompt("Quantos quartos possui? ")
            imovel.banheiro = prompt("Quantos banheiros ? ")
            
            const confima = confirm(
                "\n proprietario: " + imovel.proprietario +
                "\n quarto: " + imovel.quarto +
                "\n banheiro: " + imovel.banheiro 
            )

            if (confirme) {
                imoveis.push(imovel)
            }

            break;

        case '2':


            for (let i = 0; i < imoveis.length ; i++) {

                alert( (i+1) + "º" + 
                imoveis[i].proprietario +
                imoveis[i].banheiro 
            )
                
                
            }

            
            break;
        case '3':
            alert("saindo...")
            break;

        default:
            break;
    }


} while (opcao !== "3"); 