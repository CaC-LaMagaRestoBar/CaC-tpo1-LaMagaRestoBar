//INICIO API clima
const API_KEY = '29ef2e122f9f4a999b1162401230905';
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&aqi=no&alerts=no`;

const locationData = {
  city: 'Buenos Aires',
  days: 4,
  lang: 'es',
};

const forecastColumns = document.querySelectorAll('.forecast-column');

async function getForecast() {
  try {
    const response = await fetch(`${BASE_URL}&q=${locationData.city}&days=${locationData.days}&lang=${locationData.lang}`);
    const data = await response.json();

    forecastColumns.forEach((column, index) => {
      const dayData = data.forecast.forecastday[index];

      const icon = dayData.day.condition.icon;
      const maxTemp = dayData.day.maxtemp_c;
      const minTemp = dayData.day.mintemp_c;
      const humidity = dayData.day.avghumidity;
      const condition = dayData.day.condition.text;

      const iconElement = column.querySelector('.icon');
      const maxTempElement = column.querySelector('.max-temp');
      const minTempElement = column.querySelector('.min-temp');
      const humidityElement = column.querySelector('.humidity');
      const conditionElement = column.querySelector('.condition');

      iconElement.setAttribute('src', `https:${icon}`);
      maxTempElement.textContent = `${maxTemp} °C`;
      minTempElement.textContent = `${minTemp} °C`;
    // humidityElement.textContent = `${humidity}%`;
      conditionElement.textContent = condition;
    });
  } catch (error) {
    console.error(error);
  }
}

getForecast(); //FIN API clima


//INICIO API trafico
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.59617384942703, lng: -58.43705617606266 },
    zoom: 15,
    // trafficControl: true,
    disableDefaultUI: false
  });

const magaMarker = new google.maps.Marker({
  position: { lat: -34.596145, lng: -58.437147 },
  map: map,
  title: 'Bar La Maga'
});

};

function activarCapaDeTrafico() {
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
} //FIN API trafico
