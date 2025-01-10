document.querySelector('#seacrch').addEventListener('submit', (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#city_name').value;

    if(!cityName) {
        return showAlert('Voce precisa digitar uma cidade...');
    }

    
});

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}