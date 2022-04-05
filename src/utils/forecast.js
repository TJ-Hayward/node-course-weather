const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a38920564a8d11324c27bf15ac14ac2e&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    const currentWeather = body.current;
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `It is ${currentWeather.weather_descriptions[0]}. It's currently ${currentWeather.temperature} degrees out. And theres is a ${currentWeather.precip}% chance of rain! The temperature outside feels like ${currentWeather.feelslike} and the wind speed is ${currentWeather.wind_speed} km/h. :)`
      );
    }
  });
};

module.exports = forecast;
