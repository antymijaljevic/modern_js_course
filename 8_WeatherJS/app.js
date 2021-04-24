//init classes
const storage = new Storage();
const ui = new UI();

//get stored location data
const weatherLocation = storage.getLocData();

const weather = new Weather(weatherLocation.city, weatherLocation.country);

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    //change location
    weather.changeLocation(city, country);

    //set location in LS
    storage.setLocData(city, country);

    //get and display weather again
    getWeather();

    //close modal
    $('#locModal').modal('hide');
});


//get weather
function getWeather(){
    weather.getWeather()
    .then(data => {
        ui.paint(data)
    })
    .catch(err => console.log(err));
}