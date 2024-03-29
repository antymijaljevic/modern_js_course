class Weather{
    constructor(city){
        this.apiKey = '72c6d27bb087db41509ff89bd97a47f1';
        this.city = city;
    }

    //fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

        const responseData = await response.json();
        return responseData;
    }

    // change city location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    };
};