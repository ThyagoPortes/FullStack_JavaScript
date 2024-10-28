
function area_triângulo() {

    const base = parseFloat(prompt("qual valor da base? "))
    const altura = parseFloat(prompt("qual valor da altura? "))
    return (base * altura) / 2
    
}

function area_retangulo() {

    const base = parseFloat(prompt("qual valor da base? "))
    const altura = parseFloat(prompt("qual valor da altura? "))
    return base * altura
    
}

function area_quadrado() {

    const base = parseFloat(prompt("qual valor da lado do quadrado? "))
    return base * base
}

function area_trapezio() {

    const base_maior = parseFloat(prompt("qual valor da base maior? "))
    const base_menor = parseFloat(prompt("qual valor da base menor? "))
    return ( base_maior + base_menor ) * altura / 2 
    
}

function area_circulo() {

    const raio = parseFloat(prompt("qual valor do raio? "))
  
    return Math.PI * ( raio * raio)
    
}



const resultado = area_circulo()

alert(resultado)


do {

   
    let opcao = prompt("Qual calculo você deseja fazer? \n" +
        "1 - Area do Triangulo \n" +

        "2 - Area do Retangulo \n" +

        "3 - Area do Quadrado \n" +

        "4 - Area do Trapezio \n" +

        "5 - Area do Circulo \n" +

        "6 - Sair \n" 

    )
    
    switch (opcao) {
        case "1":
            resultado = area_triângulo()
            break;

        case "2":
            resultado = area_triângulo()
            break;

        case "3":
            resultado = area_triângulo()
            break;

        case "4":
            resultado = area_triângulo()
            break;

        case "5":
            resultado = area_triângulo()
            break;
    
        default:
            alert("opção inválida")
            break;
    }



    
} while (opcao !==6);