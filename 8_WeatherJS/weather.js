class Weather{
    constructor(city, state){
        this.apiKey = 'wOD1mUj6d1k9rMdcwos40U3xttSC8fvE';
        this.city = city;
        this.state = state;
    }

    // fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=${this.apiKey}`)
    }
}