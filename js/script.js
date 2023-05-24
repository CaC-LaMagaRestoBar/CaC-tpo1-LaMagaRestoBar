//INICIO API clima
const API_KEY = 'b3cae54015f1432c98d150552232305';
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
      const chanceOfRain = dayData.day.daily_chance_of_rain;

      const iconElement = column.querySelector('.icon');
      const maxTempElement = column.querySelector('.max-temp');
      const minTempElement = column.querySelector('.min-temp');
      const humidityElement = column.querySelector('.humidity');
      const conditionElement = column.querySelector('.condition');
      const chanceOfRainElement = column.querySelector('.chance_of_rain');

      iconElement.setAttribute('src', `https:${icon}`);
      maxTempElement.textContent = `${maxTemp} °C`;
      minTempElement.textContent = `${minTemp} °C`;
      // humidityElement.textContent = `${humidity}%`;
      conditionElement.textContent = condition;
      chanceOfRainElement.textContent = `${chanceOfRain}%`;
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
    disableDefaultUI: false,
  });

const magaMarker = new google.maps.Marker({
  position: { lat: -34.596145, lng: -58.437147 },
  map: map,
  title: 'La Maga Resto Bar'
});

};

function activarCapaDeTrafico() {
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
} //FIN API trafico





//Validación formulario

const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const comentario = document.getElementById('comentario');

form.addEventListener('submit', e => {
  e.preventDefault();

  showPopUp();
  refreshForm();
});

const setError = (element, mensaje) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = mensaje;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const nombreValue = nombre.value.trim();
  const emailValue = email.value.trim();
  const comentarioValue = comentario.value.trim();
  
  if(nombreValue === '') {
    setError(nombre, 'Nombre es necesario');
  } else {
    setSuccess(nombre);
  }

  if(emailValue === '') {
    setError(email, 'Email es necesario');
      } else if (!isValidEmail(emailValue)) {
        setError(email, 'Ingresa un email válido')
      } else {
        setSuccess(email);
    }

  if(comentarioValue === '') {
    setError(comentario, 'No ingresaste ninguna consulta');
    } else if(comentarioValue.length < 15) {
      setError(comentario, 'Escribe una consulta más larga');
    } else {
      setSuccess(comentario);
    }

  if(nombreValue != '' && (isValidEmail(emailValue)) && (comentarioValue.length > 14)) {
    document.getElementById('enviar').classList.add('activado');
    document.getElementById('enviar').classList.remove('desactivado');
    document.getElementById('enviar').disabled = false;
  } else {
    document.getElementById('enviar').classList.add('desactivado');
    document.getElementById('enviar').classList.remove('activado');
    document.getElementById('enviar').disabled = true;
  }



  }//FIN Validación formulario

//PopUp fomulario enviado luego de ENVIAR
function showPopUp() {
  var popup = document.getElementById("myPopUp");
  popup.classList.toggle("mostrar");
}

//Refresh formulario luego de ENVIAR
const refreshForm = function () {
  setTimeout(function() {
    location.reload();
  }, 2500);
}

//mostrar ocultar secciones del menú
function mostrar(seccion) {
  document.getElementById('brunchs').style.display = 'none';
  document.getElementById('desayunos').style.display = 'none';
  document.getElementById('sandwiches').style.display = 'none';
  document.getElementById('ensaladas').style.display = 'none';
  document.getElementById('pasteleria').style.display = 'none';
  document.getElementById('tortas').style.display = 'none';
  document.getElementById('tragos').style.display = 'none';
  document.getElementById(seccion).style.display = 'block';
}

function marcar(marcado) {
  document
}

var texts = [
  "I am a sentence.",
  "Some nice stuff.",
  "I am random too!"
];

document.getElementById('randomText').value = texts[Math.floor(Math.random()*texts.length)];