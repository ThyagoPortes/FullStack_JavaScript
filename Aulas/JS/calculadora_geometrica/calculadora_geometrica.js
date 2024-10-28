
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
//do {
//opcao = parseFloat(prompt('informe qual calculo deseja? '))
    
//} while (opcao !==3);