const header = document.querySelector('header');
const nav = document.querySelector('nav')
const footer = document.querySelector('footer');

header.innerHTML = `<div class="marca">
<div class="logotipo">
    <a href="./index.html"><img src="img/marca-removebg-preview2.png" alt="logotipo La Maga Resto Bar"></a>
</div>
<div class="cabecera">
    <h1>La Maga Resto Bar</h1>
    <div>
        <blockquote id="randomText">"Pero no se podía hacer otra cosa que mirar a la Maga tan hermosa al borde de la rayuela, y desear que impulsara el tejo de una casilla a otra, de la tierra al Cielo". Julio Cortázar</blockquote><p>Rayuela (1963), Julio Córtazar</p>
    </div>
    
</div>

<div class="direccion">
    <div><a href="https://www.google.com/maps/place/La+Maga/@-34.5962147,-58.4378018,251m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95bccb66f3c109bd:0xa7be817630ac7f02!8m2!3d-34.5962158!4d-58.4371581!16s%2Fg%2F11rcq7g2gp?shorturl=1" target="_blank"><img src="img/mapa.png" alt="icono mapa"></a>
    <p> Aguirre 686, Villa Crespo</p></div>
    <div><img src="img/negocio.png" alt="icono abierto">
    <p>Martes a Domingo</p></div>
    <div><img src="img/hora-del-reloj.png" alt="icono horario">
    <p>10am a 8pm</p></div>
</div>
</div>
`;

nav.innerHTML = `<a href="./index.html">Inicio</a>
<a href="menu.html">Menú online</a>
<a href="comollegar.html">Cómo llegar</a>
<a href="contact.html">Contacto</a>
`;

footer.innerHTML = `<div class="footer">
<div class="footerLogo">
    <a href="./index.html"><img src="img/marca-removebg-preview2.png" alt="logotipo La Maga Resto Bar"></a>
</div>

<div class="legales">
    <p>La Maga Resto Bar</p>
    <p>Aguirre 686</p>
    <p>Villa Crespo, Ciudad de Buenos Aires</p>
    <p>contacto@lamagarestobar.com</p>
    <p>Todos los derechos reservados</p>
</div>

<div class="redes">
    <h3>Siguenos en:</h3>
    <a href="https://www.instagram.com/lamaga_bar/"><img src="img/rss-instagram.png" alt=""> Instagram</a>
    <a href="https://www.tiktok.com"><img src="img/rss-tik-tok.png" alt=""> Tik Tok</a>
    <a href="https://www.facebook.com"><img src="img/rss-facebook.png" alt=""> Facebook</a>
</div>
</div>`;

var texts = [
    `“Pero no se podía hacer otra cosa que mirar a la Maga tan hermosa al borde de la rayuela, y desear que impulsara el tejo de una casilla a otra, de la tierra al Cielo”`,

    `“Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos”.`,
    
    `“Probablemente de todos nuestros sentimientos el único que no es verdaderamente nuestro es la esperanza. La esperanza le pertenece a la vida, es la vida misma defendiéndose"`,
    
    `“Música, melancólico alimento para los que vivimos de amor”.`,
    
    
    `“La vida, como un comentario de otra cosa que no alcanzamos, y que está ahí al alcance del salto que no damos”.`,
    
    `“Y así es cómo los que nos iluminan son los ciegos”.`,
    
    `“La felicidad tenía que ser otra cosa, algo quizá más triste que esta paz y este placer, un aire como de unicornio o isla, una caída interminable en la inmovilidad”.`,
    
    `“Todo lo que se escribe en estos tiempos y que vale la pena leer está orientado hacia la nostalgia”.`,
    
    `“Había tanto tiempo perdido en vos, eras de tal manera el molde de lo que hubieras podido ser”.`
    ];

document.getElementById('randomText').innerHTML = texts[Math.floor(Math.random()*texts.length)];