El sitio web está realizado para 'La Maga Resto Bar', un local gastronómico ubicado en el barrio de Villa Crespo, en la Ciudad de Buenos Aires, y que pertenece a un familiar de un integrante del grupo y nos permitió realizar dicho proyecto. El propósito del sitio es que funcione como extensión de la cuenta principal de Instagram.


Integrantes del grupo: 
- Abril Benaderette
- Maite Cabrera
- Cristian Hoyos
- Joaquín Obispo


- Enlace del sitio web en GitHub Pages: https://github.com/CaC-LaMagaRestoBar/CaC-tpo1-LaMagaRestoBar
- Enlace del repositorio de GitHub: https://cac-lamagarestobar.github.io/CaC-tpo1-LaMagaRestoBar/





La página cuenta con cuatro secciones:
- Inicio o home: La página inicial del sitio web está maquetada con grid y cuenta con 3 cajas distintas, una para la sección 'Instagram', que es la caja principal y ocupa todo el alto del sitio y 3/4 del ancho; la segunda caja es para la API de weatherapi.com que muestra el clima de los próximos tres días y la última caja contiene la API de Google Maps con la ubicación del bar y la posibilidad de activar la capa de tráfico.

---

- Menú online: La página 'Menú online' es utilizada para mostrar a través de la página web los distintos platos, postres y bebidas que sirve el bar, e información sobre ellas, como los ingredientes, imágenes representativas (propias), nombre y precio.
El main del menú se separa inicialmente en dos cajas, una para una cinta de opciones que nos permite mostrar únicamente los platillos de una sección específica (y esconder las otras) y la segunda caja para el contenido de cada una de las secciones.

Todos los objetos del menú están insertados a través de archivos .json a través de la instrucción fetch.

---


- Cómo llegar: La sección también maquetada con grid está destinada a brindar mayor información sobre la ubicación del bar, mostrando el mapa en mayor tamaño que en la página de inicio, también incluyendo el botón para activar la capa de tráfico de la zona y añadiendo información útil como las líneas de colectivos, trenes y subtes que se pueden utilizar para acercarse al local.

---



- Contacto: formulario de contacto que cuenta con los campos de texto 'Nombre', 'Email', 'Mensaje' y un botón 'Enviar'.
El formulario tiene una validación hecha con JS (función ValidateInputs()) que valida que los campos sean correctos con el evento 'oninput' (cada vez que el usuario ingresa/elimina un carácter). Verifica que cada campo no esté vacío, en primer lugar, luego el campo 'email' requiere un formato válido (@, terminación .algo, sin caracteres extraños con ) o /, etc.) y el campo 'consulta' debe tener al menos 15 caracteres ingresados.

Visualmente, cada campo del formulario adquiere un borde rojo para los errores o verde cuando lo ingresado cumple con lo requerido. Además, un mensaje de error en rojo es mostrado justo debido del campo explicando 

Por último, el botón 'enviar' inicialmente está desactivado (atributo disabled, en color gris y con el cursor:not-allowed) y sólo cuando los tres campos tienen respuestas válidas, el botón recibe la clase '.activado' (con la instrucción .classList.add('activado')), deja de estar como disabled, cambia su color a rojo y ahora sí el cursos tendrá el estilo de 'pointer'.

Todos los campos se validan al mismo tiempo debido a que es una sola función la que lo hace, aunque está claro que sería una manera más elegante proporcionar una función por cada campo.


---



Además, el sitio cuenta con otras 3 secciones dinámicas que se muestran en todas las páginas: cabecera, barra de navegación y footer.
Estos están incluidos dentro del archivo 'js/headerFooter.js' y hace uso del atributo 'querySelector' (para seleccionar la etiqueta HTML a modificar) y la instrucción 'innerHTML' para introducir un código HTML establecido en una única ocasión en tantas páginas como sea necesario, sin la necesidad de repetir el código en cada una de estas.

Por otra parte, debajo del título se muestran frases extraído del libro Rayuela de Julio Córtazar, cuyo protagonista ("La Maga") da nombre al bar. Las frases están dentro de un array y cada que se recarga la página o se navega en las distintas secciones, se muestra una distinta con la función "Math.random".






---

=== Recursos utilizados:

- API Google Maps Plataform para mostrar el tráfico en la zona que se ubica el bar.
https://developers.google.com/maps/documentation/javascript/examples/layer-traffic#maps_layer_traffic-javascript



- API Weatherapi.com para mostrar el pronóstico de los próximos 3 días
https://www.weatherapi.com/docs/

El propósito y utilización de esta API es brindar un panorama del estado del clima en la zona donde se ubica el bar (Buenos Aires) para los próximos tres días, con el objetivo de poder planificar tu salida.
La API de WeatherAPI proporciona un archivo Json, que se actualiza cada 1 hora, y brinda un sin fin de informaciones sobre el clima de las cuales seleccionamos estado del tiempo (soleado, lluvioso, nublado, etc. con un ícono proporcionado por la misma API), temperatura máxima del día, temperatura mínima del día y probabilidad de lluvia.




- Elfsight Instagram feed para embeber el feed de Instagram del bar y mostrar sus publicaciones.
https://dash.elfsight.com/widget/c9f5511b-e991-4d0d-bf0a-e61c27a9da63?

** Idealmente quisimos utilizar la API de Instagram para este mismo propósito, pero al ser un negocio real de alguien que no pertenece al grupo, valoramos no solicitar acceso al Token de Instagram ni tampoco a otras aplicaciones que requerían el acceso y permisos a la cuenta. Por eso, para el ejemplo utilizamos Elfsight que no requería de ninguno de estos. Sin embargo, la aplicación de la API de Instagram puede realizarse sin mayor dificultad sobre el código actual.







=== Otros requisitos del trabajo práctico:


- Responsive:
Las cuatro secciones contienen tres media queries con los puntos de cortes a 900px, 768px y 600px. En el caso de la página de inicio (index.html) las media queries no sólo modifican el tamaño de letra (establecido es REM en cada ocasión, disminuye de 10px a 9 y 8 en los distintos cortes) sino que también reorganizan las distintas secciones modificando el grid.
Ejemplo de esto ocurre en el main del index, que inicialmente se divide en dos columnas (por un lado la inserción de Instagram) y en el otro la API de clima y tránsito, ya que en resoluciones menores a 600px todo el contenido se organiza en una sola columna permitiendo una visualización más cómoda en dispositivos móviles. En los cortes de 900px y 768px también se modifica la relación de tamaño de las columnas (pasando de 3/1 a 3/2) y la cantidad de publicación mostradas por la inserción de Instagram se reduce de 8 a 4.

También estas mismas reorganizaciones están presentes en páginas como la de 'Cómo llegar' (dos columnas que se transforman a una) y la cabecera del sitio se transforman de mostrar sus elementos horizontalmente a mostrarlos de manera vertical, aun manteniendo un buen aspecto.

Tanto en la página 'Menú' como 'Contacto' no fue necesario ya que todos los cuadros tienen un tamaño menor a los 600px del último corte. En el Menú, donde max-width es 400px, flex automáticamente acomoda cada cuadro con la propiedad 'wrap'; mientras que el formulario de contacto tiene un max-width de 500px por lo que su ajuste es automático a todas las resoluciones.




- Diseño/estética: Si bien ninguno contaba con gran experiencia en el desarrollo front-end y menos en diseño UI/UX, se optó por la realización de un diseño sencillo y con una paleta de colores limitada (exclusivamente se utiliza negro, blanco y rojo). Esto, obviamente, está muy relacionado al logo del bar que solamente utiliza los valores negro y blanco para su concepción, por lo que nos estableció una inequívoco camino a seguir para desarrollar la estética del sitio, a la que sólo le añadimos el color rojo para quitar tanta sobriedad y, en un plano mucho menos importante, mantiene cierto acercamiento a la comida 

El fondo del sitio tiene un muy sutil patrón de cuadrados negros y grises para evitar un fondo tan plano, que fue realizado con https://www.magicpattern.design.

Por otra parte, la jerarquía de la información es bastante clara. La cabecera es un buen ejemplo de esto: el logo en primer lugar, luego el nombre como h1 central del sitio y enseguida obtiene lugar la dirección, los días de apertura y los horarios porque lo consideramos como una información clave para una página con este propósito.





- Flexbox/Grid: el sitio utiliza constantemente tanto Grid como Flexbox. Grid es parte importante para hacer el sitio responsive en las distintas resoluciones, mientras que Flexbox tiene un papel más importante en secciones donde es necesario alinear múltiples objetos, como por ejemplo el menú o las tres tarjetas del clima.



- Fonts: todo el sitio utiliza la fuente Fira Sans de Google Fonts. https://fonts.google.com/specimen/Fira+Sans


- Flaticon para los iconos de la cabecera y de las redes sociales. https://www.flaticon.es/


- Animaciones, transformación o transición: La página no hace gran uso de animaciones en general aunque si hay pequeños efectos de movimientos en hover en algunas imágenes como el logo principal y otros íconos.
También el formulario de contacto cuenta con algunas animaciones para mostrar los errores en los datos ingresados y en la sección 'Menú' las distintas categorías de comidas se muestran/ocultan cuando el usuario selecciona una que desea visitar.

Más allá de esto, la página se caracteriza por mostrarse sumamente reactiva a las acciones del usuario, principalmente utilizando el recurso de 'hover' para acompañar siempre la navegación del usuario por el sitio.


- Bootstrap: no se utilizó Bootstrap ni ningún otro Framework de CSS.

- Iframe: no cuenta con ningún iframe, aunque en su lugar tanto el clima como el tránsito fue insertado por medio de APIs.

- Etiquetas semánticas: En general no se abusa de la utilización de divs, dando más lugar a etiquetas como header, nav, main, footer, section, entre otras.