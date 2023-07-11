//1. Installiere die erforderlichen Pakete (z.B. Axios) in deinem Node.js-Projekt.
//2. Lege eine Variable für deinen API-Schlüssel fest, den du von OpenWeatherMap erhältst.
//    habe ich separat in der cofig.js eingefügt

//3. Implementiere den Code, um den Namen der Stadt als Argument von der Kommandozeile zu lesen.
const city = process.argv[2];
if (!city) {
  console.error('Bitte geben Sie einen Stadtnamen ein.');
  process.exit(1);
}

//4. Konstruiere die URL für den API-Aufruf anhand des Stadtnamens und deines API-Schlüssels.
const config = require('./config');
const axios = require('axios');

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.API_KEY}`;

//5. Verwende Axios, um den API-Aufruf durchzuführen und die erhaltenen Daten abzurufen.
//6. Verarbeite die empfangenen Daten, um die gewünschten Informationen (z.B. Temperatur, 
//   Luftfeuchtigkeit, Wetterbeschreibung) zu extrahieren.
axios.get(url)
  .then(response => {
    const data = response.data;
    const weather = {
      Stadt: data.name,
      Temperatur: data.main.temp,
      Luftfeuchtigkeit: data.main.humidity,
      Beschreibung: data.weather[0].description,
    };
    console.log(weather);
  })
  .catch(error => {
    console.error('Ein Fehler ist aufgetreten: ', error);
  });
