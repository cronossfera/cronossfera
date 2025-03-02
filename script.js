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
function showTablero() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("tablero").style.display = "block";
}

// Tablero de estructuras
let nodos = JSON.parse(localStorage.getItem("nodos")) || [];
function addNodo() {
    const tema = document.getElementById("tema").value;
    const texto = document.getElementById("nodo").value;
    if (tema && texto) {
        nodos.push({ tema, texto });
        updateNodos();
        document.getElementById("nodo").value = ""; // Limpiar textarea
    }
}

function updateNodos() {
    const nodosDiv = document.getElementById("nodos");
    nodosDiv.innerHTML = nodos.map((n, i) => `
        <div class="nodo" style="top: ${i * 60}px; left: ${Math.random() * 400}px;">
            <strong>${n.tema}</strong>: ${n.texto}
        </div>
    `).join("");
}

function saveTablero() {
    localStorage.setItem("nodos", JSON.stringify(nodos));
    alert("Guardado localmente!");
}

// Cargar cápsula al iniciar
nuevaCapsula();
updateNodos();