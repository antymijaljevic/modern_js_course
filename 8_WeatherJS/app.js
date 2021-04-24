const ui = new UI();

const weather = new Weather('Los Abrigos');

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

//get weather
function getWeather(){
    weather.getWeather()
    .then(data => {
        ui.paint(data)
    })
    .catch(err => console.log(err));
}