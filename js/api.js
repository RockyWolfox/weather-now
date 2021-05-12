class OpenWeather {
  constructor() {
    this.apikey = "768959766ee79ee6fcae99be67120bc8";
  }

  async search(cityName) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}`
    );

    const results = await response.json();

    return results;
  }
}
