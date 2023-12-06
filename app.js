const key = "e0283766cee7e7e70be7e75409ae8042"

const search = () => {
    let cidade = document.querySelector(".form-control").value
    
    data(cidade)
}

const data = async (cidade) => {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
    insertData(dados)
}

const insertData = (dados) => {
    document.querySelector(".local").innerHTML = "Local: " + dados.name
    document.querySelector(".time").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".texto-previsao").innerHTML = "Clima: " + dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%"

    console.log(dados)
}


document.addEventListener("keypress", function (e) {
    if(e.key === "Enter") {
        const btn = document.querySelector("#button-search");

        btn.click()
    }
})

