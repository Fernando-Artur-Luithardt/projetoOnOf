const button = document.querySelector("button.button")
button.style.color = "black"

function onOf() {
    //aponta para o botão e o corpo (body)
    const button = document.querySelector("button.button")
    const body = document.body

    //pega a cor atual do botão
    let stilo = button.style.color
    // console.log(stilo)
    
    //lógica para inverter a cor e trocar o texto do botão
    if (stilo == 'black') {
        body.style.backgroundColor = "white"
        button.style.backgroundColor = "black"
        button.style.color = "white"
        button.innerText = "OFF"
        console.log(stilo)
    } else {
        body.style.backgroundColor = "black"
        button.style.backgroundColor = "white"
        button.style.color = "black"
        button.innerText = "ON"
        console.log(stilo)
    }
}