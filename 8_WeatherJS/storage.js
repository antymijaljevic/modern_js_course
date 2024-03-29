class Storage {
    constructor() {
      this.city;
      this.country;
      this.defaultCity = 'Los Abrigos';
      this.defaultcountry = 'Spain';
    }
  
    getLocData() {
      if(localStorage.getItem('city') === null) {
        this.city = this.defaultCity;
      } else {
        this.city = localStorage.getItem('city');
      }
  
      if(localStorage.getItem('country') === null) {
        this.country = this.defaultcountry;
      } else {
        this.country = localStorage.getItem('country');
      }
  
      return {
        city: this.city,
        country: this.country
      }
    }
  
    setLocData(city, country) {
      localStorage.setItem('city', city);
      localStorage.setItem('country', country);
    }
  }