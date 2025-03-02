// Base de datos de cápsulas
const capsulas = [
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
];

// Mostrar cápsula aleatoria
function nuevaCapsula() {
    const random = Math.floor(Math.random() * capsulas.length);
    const capsula = capsulas[random];
    document.getElementById("dato").innerHTML = `Dato: ${capsula.dato} <span onclick="alert('${capsula.datoZoom}')">[Zoom In]</span>`;
    document.getElementById("cita").innerHTML = `Cita: ${capsula.cita} <span onclick="alert('${capsula.citaZoom}')">[Zoom In]</span>`;
    document.getElementById("recurso").innerHTML = `Recurso: ${capsula.recurso}`;
}

// Enviar por email
function enviar() {
    const capsulaText = `${document.getElementById("dato").textContent}\n${document.getElementById("cita").textContent}\n${document.getElementById("recurso").textContent}`;
    window.location.href = `mailto:?subject=Cronosfera&body=${encodeURIComponent(capsulaText)}`;
}

// Mostrar tablero
// Mostrar organizador
function showTablero() { // Cambiamos nombre a showOrganizador si quieres, pero lo dejo así por compatibilidad
    document.querySelector(".container").style.display = "none";
    document.getElementById("organizador").style.display = "block";
}

// Organizador dinámico
let items = JSON.parse(localStorage.getItem("items")) || [];
const today = new Date().toISOString().split("T")[0]; // Fecha actual

function addItem() {
    const categoria = document.getElementById("categoria").value;
    const texto = document.getElementById("entrada").value;
    const fecha = document.getElementById("fecha").value;
    if (texto && fecha) {
        items.push({ categoria, texto, fecha });
        updateLista();
        document.getElementById("entrada").value = ""; // Limpiar entrada
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

// Cargar al iniciar
nuevaCapsula();
updateLista();
