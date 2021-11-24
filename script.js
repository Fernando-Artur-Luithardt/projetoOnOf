function onOf() {
    const button = document.getElementById('button')
    let stilo = button.style.color
    console.log(stilo)
    if (stilo == 'black') {
        document.body.style.backgroundColor = "white"
        button.style.backgroundColor = "black"
        button.style.color = "white"
        button.innerText = "OFF"
    } else {
        document.body.style.backgroundColor = "black"
        button.style.backgroundColor = "white"
        button.style.color = "black"
        button.innerText = "ON"
    }
}