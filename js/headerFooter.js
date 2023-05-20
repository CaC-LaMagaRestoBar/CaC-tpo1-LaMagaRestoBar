const header = document.querySelector('header');
const nav = document.querySelector('nav')
const footer = document.querySelector('footer');

header.innerHTML = `<div class="marca">
<div class="logotipo">
    <a href="./index.html"><img src="img/marca-removebg-preview2.png" alt="logotipo La Maga Resto Bar"></a>
</div>
<div class="cabecera">
    <h1>La Maga Resto Bar</h1>
    <h3>Desayunos | Brunch | Almuerzos | Gourmet | Meriendas | Tortas</h3>
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