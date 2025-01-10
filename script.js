document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#city_name').value;

    if(!cityName) {
        return showAlert(`Voce precisa digitar uma cidade...`);
    }

    const apikey = 'ca931aabc2d77c62db514d28f9755c23';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apikey}&units=metric&Lang=pt_br`

    const results = await fetch(apiUrl);
    const json = await results.json()

    if(json.cod === 200) {
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            temoIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,

        });
    }else{
        showAlert('Nao foi possivel localizer...')
    }

});

function showAlert(json){
    showAlert()

    document.querySelector("#weather").classList.add('show');

}

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}