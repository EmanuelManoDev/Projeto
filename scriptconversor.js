function converter(){
    let resultado = document.getElementById("resultado")
    let valorEmDolar = document.getElementById("valor").value
    let dolarDoDia = 1.99

    let valorReal = valorEmDolar * dolarDoDia

    resultado.innerHTML = "R$" + valorReal
    console.log(valorReal)
}

function converter1(){
    let resultado = document.getElementById("resultado1")
    let valorEmDolar = document.getElementById("valor1").value
    let dolarDoDia = 3.50

    let valorReal = valorEmDolar * dolarDoDia

    resultado.innerHTML = "R$" + valorReal
    console.log(valorReal)
}