// ==========================================
// 100 RAZONES PARA LEYDI ❤️
// PARTE 1
// ==========================================

// ---------- ELEMENTOS ----------
const loader = document.getElementById("loader");

const welcome = document.getElementById("welcome");
const intro = document.getElementById("intro");
const reasonsSection = document.getElementById("reasons");
const finalSection = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const readBtn = document.getElementById("readBtn");
const nextBtn = document.getElementById("nextBtn");

const reasonText = document.getElementById("reasonText");
const number = document.getElementById("number");
const progressBar = document.getElementById("progressBar");

const music = document.getElementById("music");

// ---------- VARIABLES ----------
let index = 0;
let escribiendo = false;

// ---------- LOADER ----------
window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 900);

    }, 2500);

});

// ---------- BOTÓN COMENZAR ----------
startBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    cambiarPantalla(welcome, intro);

});

// ---------- BOTÓN EMPEZAR ----------
readBtn.addEventListener("click", () => {

    cambiarPantalla(intro, reasonsSection);

    mostrarRazon();

});

// ---------- CAMBIO DE PANTALLA ----------
function cambiarPantalla(actual, siguiente){

    actual.classList.add("fade");

    setTimeout(() => {

        actual.style.display = "none";

        siguiente.style.display = "block";

        siguiente.classList.remove("hidden");

        siguiente.classList.add("fade");

    }, 500);

}

// ---------- MOSTRAR RAZÓN ----------
function mostrarRazon(){

    number.textContent =
    `❤️ Razón ${index + 1} de ${razones.length} ❤️`;

    escribirTexto(razones[index]);

    actualizarBarra();

}

// ---------- EFECTO MÁQUINA ----------
function escribirTexto(texto){

    if(escribiendo) return;

    escribiendo = true;

    reasonText.innerHTML = "";

    let i = 0;

    let intervalo = setInterval(() => {

        reasonText.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(intervalo);

            escribiendo = false;

        }

    }, 35);

}

// ---------- BARRA ----------
function actualizarBarra(){

    const porcentaje =
    ((index + 1) / razones.length) * 100;

    progressBar.style.width =
    porcentaje + "%";

}

// ---------- SIGUIENTE ----------
nextBtn.addEventListener("click", () => {

    if(escribiendo) return;

    index++;

    if(index < razones.length){

        mostrarRazon();

    }else{

        terminarHistoria();

    }

});
// ==========================================
// PARTE 2
// ==========================================

// ---------- CONTENEDOR DE CORAZONES ----------
const hearts = document.getElementById("hearts");

// Emojis que caerán
const emojis = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💘",
    "💝",
    "🌸",
    "✨"
];

// ---------- CREAR CORAZÓN ----------
function crearCorazon(){

    const heart = document.createElement("span");

    heart.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left =
        Math.random()*100 + "%";

    heart.style.fontSize =
        (18 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (4 + Math.random()*5) + "s";

    heart.style.opacity =
        Math.random();

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

// ---------- LLUVIA SUAVE ----------
setInterval(()=>{

    crearCorazon();

},450);

// ---------- EXPLOSIÓN FINAL ----------
function lluviaFinal(){

    let cantidad = 250;

    for(let i=0;i<cantidad;i++){

        setTimeout(()=>{

            crearCorazon();

        },i*25);

    }

}

// ---------- CONTADOR ----------
const loveTimer =
document.getElementById("loveTimer");

// CAMBIA ESTA FECHA
const fechaInicio = new Date("2026-06-25");

function actualizarContador(){

    const ahora = new Date();

    const diferencia =
    ahora - fechaInicio;

    const dias =
    Math.floor(diferencia/1000/60/60/24);

    const horas =
    Math.floor(diferencia/1000/60/60)%24;

    const minutos =
    Math.floor(diferencia/1000/60)%60;

    const segundos =
    Math.floor(diferencia/1000)%60;

    loveTimer.innerHTML =
    `${dias} días ❤️ ${horas} horas ❤️ ${minutos} minutos ❤️ ${segundos} segundos`;
}

setInterval(actualizarContador,1000);

actualizarContador();

// ---------- EFECTO AL CAMBIAR RAZÓN ----------
function animarTarjeta(){

    const card =
    document.querySelector(".card");

    card.style.transform =
    "scale(.95)";

    card.style.opacity =
    ".5";

    setTimeout(()=>{

        card.style.transform =
        "scale(1)";

        card.style.opacity =
        "1";

    },250);

}

// ---------- MEJORA DEL BOTÓN ----------
nextBtn.addEventListener("click",()=>{

    animarTarjeta();

});
// ==========================================
// PARTE 3
// FINAL ROMÁNTICO ❤️
// ==========================================

// Mensaje final
const mensajeFinal = document.getElementById("mensajeFinal");

function terminarHistoria(){
    
    document.body.style.overflowY = "auto";

    reasonsSection.style.display = "none";

    finalSection.style.display = "block";

    finalSection.classList.remove("hidden");

}

// Carta final
function escribirCarta(){

const carta = `

Hola, mi amor... ❤️

Si llegaste hasta aquí...

Quiero darte las gracias. Gracias por regalarme tantos momentos bonitos. Gracias por aparecer en mi vida.

Nunca imaginé que un ensayo de tinkus iba a cambiar mi vida para siempre.

Pensé que este regalo serían solamente100 razones...

Pero la verdad... Te mentí un poquito.

No existen solamente 100 razones para amarte.

Existen miles. Millones. Y aun así seguirían faltando.

Porque cada día encuentro una razón nueva para enamorarme de ti.

Cuando sonríes.

Cuando me abrazas.

Cuando me haces reír.

Cuando simplemente eres tú.

Si pudiera volver atrás...

Volvería a ese ensayo de tinkus.

Volvería a mirarte.

Volvería a hablarte.

Volvería a enamorarme de ti.

Una...

Y mil veces más.

Gracias por existir, Leydi.

Eres la mejor casualidad
que me regaló la vida.

Te amo muchísimo.

Con todo mi corazón.

❤️

Siempre tú.

Con amor,

Guzi ❤️`;

    mensajeFinal.innerHTML = "";

    let i = 0;

    const velocidad = 38;

    let maquina = setInterval(() => {

        mensajeFinal.innerHTML += carta.charAt(i);

        i++;

        if(i >= carta.length){

            clearInterval(maquina);

            mostrarDespedida();

        }

    }, velocidad);

}

// Último mensaje
function mostrarDespedida(){

    setTimeout(()=>{

        const despedida = document.createElement("div");

        despedida.style.position = "fixed";
        despedida.style.top = "0";
        despedida.style.left = "0";
        despedida.style.width = "100%";
        despedida.style.height = "100%";

        despedida.style.background = "rgba(255,240,245,.92)";

        despedida.style.display = "flex";
        despedida.style.justifyContent = "center";
        despedida.style.alignItems = "center";
        despedida.style.flexDirection = "column";

        despedida.style.zIndex = "9999";

        despedida.innerHTML = `

        <h1 style="
        color:#d63384;
        font-size:3rem;
        margin-bottom:20px;
        text-align:center;
        ">
        ❤️ Para siempre tú ❤️
        </h1>

        <h2 style="
        color:#ff4d8d;
        margin-bottom:20px;
        ">
        Leydi
        </h2>

        <p style="
        font-size:22px;
        color:#555;
        text-align:center;
        ">
        Gracias por ser la mejor parte de mi vida.
        <br><br>
        Te amo infinitamente.
        </p>

        `;

        document.body.appendChild(despedida);

        lluviaUltra();

    },5000);

}

// Lluvia gigante
function lluviaUltra(){

    let total = 500;

    for(let i=0;i<total;i++){

        setTimeout(()=>{

            crearCorazon();

        },i*12);

    }

}

// ============================
// HUEVO DE PASCUA ❤️
// ============================

const ultimoBtn = document.getElementById("ultimoBtn");
const ultimoMensaje = document.getElementById("ultimoMensaje");
const reiniciarBtn = document.getElementById("reiniciarBtn");

if (ultimoBtn) {

    ultimoBtn.addEventListener("click", () => {

        ultimoBtn.style.display = "none";

        ultimoMensaje.style.display = "block";

        lluviaUltra();

        escribirCarta();

    });

}

if (reiniciarBtn) {

    reiniciarBtn.addEventListener("click", () => {

        location.reload();

    });

}
