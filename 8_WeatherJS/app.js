const weather = new Weather('Los Abrigos');

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

//get weather
function getWeather(){
    weather.getWeather()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}