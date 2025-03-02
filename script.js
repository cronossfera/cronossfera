// Base de datos de cápsulas con traducciones
const capsulas = {
    es: [
        {
            dato: "El 1 de marzo de 1983, se lanzó el primer CD de audio comercial.",
            datoZoom: "Foto del Sony CDP-101: 74 minutos por Beethoven.",
            cita: "‘La mente que se abre a una nueva idea jamás vuelve a su tamaño original’ - Holmes.",
            citaZoom: "Dicho por un juez que también inventó un anestésico.",
            recurso: "<a href='https://archive.org/details/electronics-basics-1970'>Manual de electrónica básica de 1970</a>"
        },
        {
            dato: "El 13 de mayo de 1991, se publicó el primer estándar de MP3.",
            datoZoom: "Comprimió audio sin sacrificar demasiada calidad.",
            cita: "‘El arte es la mentira que nos permite ver la verdad’ - Picasso.",
            citaZoom: "Refleja su obsesión con la percepción.",
            recurso: "<a href='https://www.gutenberg.org/ebooks/174'>El retrato de Dorian Gray (texto libre)</a>"
        }
    ],
    en: [
        {
            dato: "On March 1, 1983, the first commercial audio CD was released.",
            datoZoom: "Photo of the Sony CDP-101: 74 minutes for Beethoven.",
            cita: "‘The mind that opens to a new idea never returns to its original size’ - Holmes.",
            citaZoom: "Said by a judge who also invented an anesthetic.",
            recurso: "<a href='https://archive.org/details/electronics-basics-1970'>Basic Electronics Manual from 1970</a>"
        },
        {
            dato: "On May 13, 1991, the first MP3 standard was published.",
            datoZoom: "Compressed audio without losing too much quality.",
            cita: "‘Art is the lie that lets us see the truth’ - Picasso.",
            citaZoom: "Reflects his obsession with perception.",
            recurso: "<a href='https://www.gutenberg.org/ebooks/174'>The Picture of Dorian Gray (free text)</a>"
        }
    ],
    fr: [
        {
            dato: "Le 1er mars 1983, le premier CD audio commercial a été lancé.",
            datoZoom: "Photo du Sony CDP-101 : 74 minutes pour Beethoven.",
            cita: "‘L’esprit qui s’ouvre à une nouvelle idée ne revient jamais à sa taille initiale’ - Holmes.",
            citaZoom: "Dit par un juge qui a aussi inventé un anesthésique.",
            recurso: "<a href='https://archive.org/details/electronics-basics-1970'>Manuel d'électronique de base de 1970</a>"
        },
        {
            dato: "Le 13 mai 1991, la première norme MP3 a été publiée.",
            datoZoom: "Compression audio sans trop perdre en qualité.",
            cita: "‘L’art est le mensonge qui nous permet de voir la vérité’ - Picasso.",
            citaZoom: "Reflète son obsession pour la perception.",
            recurso: "<a href='https://www.gutenberg.org/ebooks/174'>Le Portrait de Dorian Gray (texte libre)</a>"
        }
    ]
};

// Configuración inicial
let idiomaActual = localStorage.getItem("idioma") || "es";
let temaActual = localStorage.getItem("tema") || "default";
document.body.className = `tema-${temaActual}`;

// Mostrar cápsula aleatoria
function nuevaCapsula() {
    const random = Math.floor(Math.random() * capsulas[idiomaActual].length);
    const capsula = capsulas[idiomaActual][random];
    document.getElementById("dato").innerHTML = `Dato: ${capsula.dato} <span onclick="alert('${capsula.datoZoom}')">[Zoom In]</span>`;
    document.getElementById("cita").innerHTML = `Cita: ${capsula.cita} <span onclick="alert('${capsula.citaZoom}')">[Zoom In]</span>`;
    document.getElementById("recurso").innerHTML = `Recurso: ${capsula.recurso}`;
}

// Enviar por email
function enviar() {
    const capsulaText = `${document.getElementById("dato").textContent}\n${document.getElementById("cita").textContent}\n${document.getElementById("recurso").textContent}`;
    window.location.href = `mailto:?subject=Cronosfera&body=${encodeURIComponent(capsulaText)}`;
}

// Mostrar organizador
function showTablero() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("organizador").style.display = "block";
}

// Organizador dinámico
let items = JSON.parse(localStorage.getItem("items")) || [];
const today = new Date().toISOString().split("T")[0];

function addItem() {
    const categoria = document.getElementById("categoria").value;
    const texto = document.getElementById("entrada").value;
    const fecha = document.getElementById("fecha").value;
    if (texto && fecha) {
        items.push({ categoria, texto, fecha });
        updateLista();
        document.getElementById("entrada").value = "";
        saveItems();
    }
}

function updateLista() {
    const listaDiv = document.getElementById("lista");
    listaDiv.innerHTML = items.map((item, index) => `
        <div class="item">
            <span>[${item.categoria}]</span> ${item.texto} - ${item.fecha}
            <button onclick="deleteItem(${index})" style="background:#ff6666;">X</button>
        </div>
    `).join("");
    updateAgenda();
}

function deleteItem(index) {
    items.splice(index, 1);
    updateLista();
    saveItems();
}

function updateAgenda() {
    const recordatoriosDiv = document.getElementById("recordatorios");
    const hoyItems = items.filter(item => item.fecha <= today);
    recordatoriosDiv.innerHTML = hoyItems.length > 0 
        ? hoyItems.map(item => `<div class="recordatorio">[${item.categoria}] ${item.texto} - ¡Hoy!</div>`).join("")
        : "<p>No hay recordatorios para hoy.</p>";
}

function saveItems() {
    localStorage.setItem("items", JSON.stringify(items));
}

// Configuración
function toggleConfig() {
    const config = document.getElementById("config");
    config.style.display = config.style.display === "none" ? "block" : "none";
}

function applyConfig() {
    const tema = document.getElementById("tema").value;
    const idioma = document.getElementById("idioma").value;
    document.body.className = `tema-${tema}`;
    idiomaActual = idioma;
    localStorage.setItem("tema", tema);
    localStorage.setItem("idioma", idioma);
    nuevaCapsula(); // Actualizar cápsula con nuevo idioma
    updateText(); // Actualizar textos fijos
}

function updateText() {
    const texts = {
        es: { h1: "Cronosfera", h2: "Organizador Dinámico", h3: "Agenda", btn1: "Cápsula Aleatoria", btn2: "Enviar a mi futuro yo", link: "Organizador Dinámico", config: "Configuración", noRec: "No hay recordatorios para hoy." },
        en: { h1: "Chronosphere", h2: "Dynamic Organizer", h3: "Agenda", btn1: "Random Capsule", btn2: "Send to My Future Self", link: "Dynamic Organizer", config: "Settings", noRec: "No reminders for today." },
        fr: { h1: "Chronosphère", h2: "Organisateur Dynamique", h3: "Agenda", btn1: "Capsule Aléatoire", btn2: "Envoyer à Mon Futur Moi", link: "Organisateur Dynamique", config: "Paramètres", noRec: "Aucun rappel pour aujourd'hui." }
    };
    document.querySelector("h1").textContent = texts[idiomaActual].h1;
    document.querySelector("#organizador h2").textContent = texts[idiomaActual].h2;
    document.querySelector("#agenda h3").textContent = texts[idiomaActual].h3;
    document.querySelector("button[onclick='nuevaCapsula()']").textContent = texts[idiomaActual].btn1;
    document.querySelector("button[onclick='enviar()']").textContent = texts[idiomaActual].btn2;
    document.querySelector("a").textContent = texts[idiomaActual].link;
    document.querySelector("#config h2").textContent = texts[idiomaActual].config;
    updateAgenda(); // Actualizar "No hay recordatorios"
}

// Cargar al iniciar
nuevaCapsula();
updateLista();
updateText();
