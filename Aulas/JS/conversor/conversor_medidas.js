alert('BEM - VINDO AO COVERSOR DE MEDIDAS: ')

let medida_em_metros = parseFloat(prompt('INFORME A MEDIDA EM METROS QUE DESEJA COVERTER: '))
let coversor_medida  = (prompt('Deseja converter para: \nmm: \ncm: \ndm: \ndam \nhm: \nkm: \ntodos:'))
let unidade_medida = 0

switch (coversor_medida){
    case "mm":
        unidade_medida = medida_em_metros * 1000
        alert(medida_em_metros + "metro(s)" + 
        "convertido em mm é : " + unidade_medida + "mm")
        break
    case "cm":
        unidade_medida = medida_em_metros * 100
        alert(medida_em_metros + "metro(s)" + 
        "convertido em cm é : " + unidade_medida + "cm")
        break
    case "dm":
        unidade_medida = medida_em_metros * 10
        alert(medida_em_metros + "metro(s)" + 
        "convertido em dm é : " + unidade_medida + "dm")
        break
    case "dam":
        unidade_medida = medida_em_metros / 10
        alert(medida_em_metros + "metro(s)" + 
        "convertido em dam é : " + unidade_medida + "dam")
        break
    case "hm":
        unidade_medida = medida_em_metros / 100
        alert(medida_em_metros + "metro(s)" + 
        "convertido em hm é : " + unidade_medida + "hm")
        break
    case "km":
        unidade_medida = medida_em_metros  / 1000
        alert(medida_em_metros + "metro(s)" + 
        "convertido em km é " + unidade_medida + "km")
        break
    case "todos":
        unidade_medida = medida_em_metros * 1000
        alert(medida_em_metros + "metro(s)" + 
        "convertido em mm é : " + unidade_medida + "mm")

        unidade_medida = medida_em_metros * 100
        alert(medida_em_metros + "metro(s)" + 
        "convertido em cm é : " + unidade_medida + "cm")

        unidade_medida = medida_em_metros * 10
        alert(medida_em_metros + "metro(s)" + 
        "convertido em dm é : " + unidade_medida + "dm")

        unidade_medida = medida_em_metros / 100
        alert(medida_em_metros + "metro(s)" + 
        "convertido em hm é : " + unidade_medida + "hm")

        unidade_medida = medida_em_metros  / 1000
        alert(medida_em_metros + "metro(s)" + 
        "convertido em km é " + unidade_medida + "km")
        break
    default:
        alert('opção inválida');
}