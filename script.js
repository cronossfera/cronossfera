// script.js

// Base de datos de cápsulas (ejemplo reducido, amplía con 500 entradas reales)
const capsulas = {
    es: [
        { fecha: "2025-03-02", dato: "Lanzamiento del iPhone 17 con IA.", datoZoom: "Apple mejora IA para fotos.", cita: "‘La tecnología simplifica la vida’ - Tim Cook.", citaZoom: "WWDC 2025.", recurso: "<a href='https://apple.com'>Noticia</a>" },
        { fecha: "2025-03-01", dato: "Acuerdo Climático Global en París.", datoZoom: "150 países firman metas.", cita: "‘El clima es nuestra responsabilidad’ - Greta Thunberg.", citaZoom: "COP30.", recurso: "<a href='https://un.org'>Detalles</a>" }
    ],
    en: [
        { fecha: "2025-03-02", dato: "iPhone 17 launch with AI.", datoZoom: "Apple enhances AI for photos.", cita: "‘Technology simplifies life’ - Tim Cook.", citaZoom: "WWDC 2025.", recurso: "<a href='https://apple.com'>News</a>" }
    ]
    // Agrega más idiomas y entradas
};

// Configuración inicial
let idiomaActual = localStorage.getItem("idioma") || "es";
let temaActual = localStorage.getItem("tema") || "default";
document.body.className = `tema-${temaActual}`;

// Animación de desvanecimiento
function applyFade(element, callback) {
    element.classList.remove("fade-in");
    element.classList.add("fade");
    setTimeout(() => {
        callback();
        element.classList.remove("fade");
        element.classList.add("fade-in");
        element.style.opacity = "1"; // Forzar visibilidad
    }, 500);
}

// Mostrar cápsula por fecha
function showCapsulaByDate() {
    const today = new Date().toISOString().split("T")[0];
    const capsula = capsulas[idiomaActual].find(c => c.fecha === today) || capsulas[idiomaActual][0];
    const container = document.querySelector(".container");
    applyFade(container, () => {
        document.getElementById("dato").innerHTML = `Dato: ${capsula.dato} <span onclick="alert('${capsula.datoZoom}')">[Zoom In]</span>`;
        document.getElementById("cita").innerHTML = `Cita: ${capsula.cita} <span onclick="alert('${capsula.citaZoom}')">[Zoom In]</span>`;
        document.getElementById("recurso").innerHTML = `Recurso: ${capsula.recurso}`;
        updateUserInfo();
        start2000sGraphics(temaActual);
    });
}

// Cápsula aleatoria
function nuevaCapsula() {
    const random = Math.floor(Math.random() * capsulas[idiomaActual].length);
    const capsula = capsulas[idiomaActual][random];
    const container = document.querySelector(".container");
    applyFade(container, () => {
        document.getElementById("dato").innerHTML = `Dato: ${capsula.dato} <span onclick="alert('${capsula.datoZoom}')">[Zoom In]</span>`;
        document.getElementById("cita").innerHTML = `Cita: ${capsula.cita} <span onclick="alert('${capsula.citaZoom}')">[Zoom In]</span>`;
        document.getElementById("recurso").innerHTML = `Recurso: ${capsula.recurso}`;
        updateUserInfo();
        start2000sGraphics(temaActual);
    });
}

// Enviar por email
function enviar() {
    const capsulaText = `${document.getElementById("dato").textContent}\n${document.getElementById("cita").textContent}\n${document.getElementById("recurso").textContent}`;
    window.location.href = `mailto:?subject=Cronosfera&body=${encodeURIComponent(capsulaText)}`;
}

// Mostrar organizador
function showOrganizador() {
    const container = document.querySelector(".container");
    const organizador = document.getElementById("organizador");
    applyFade(container, () => {
        container.style.display = "none";
        organizador.style.display = "block";
        organizador.classList.add("fade-in");
        stop2000sGraphics();
    });
}

// Volver a principal
function backToMain() {
    const organizador = document.getElementById("organizador");
    const container = document.querySelector(".container");
    applyFade(organizador, () => {
        organizador.style.display = "none";
        container.style.display = "block";
        container.classList.add("fade-in");
        start2000sGraphics(temaActual);
    });
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
        localStorage.setItem("items", JSON.stringify(items));
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
    localStorage.setItem("items", JSON.stringify(items));
}

function updateAgenda() {
    const recordatoriosDiv = document.getElementById("recordatorios");
    const hoyItems = items.filter(item => item.fecha <= today);
    const noRecTexts = { es: "No hay recordatorios para hoy.", en: "No reminders for today." };
    recordatoriosDiv.innerHTML = hoyItems.length > 0 
        ? hoyItems.map(item => `<div class="recordatorio ${item.fecha === today ? 'pendiente' : ''}">[${item.categoria}] ${item.texto} - ${item.fecha === today ? '¡Hoy!' : item.fecha}</div>`).join("")
        : `<p>${noRecTexts[idiomaActual]}</p>`;
}

// Configuración
function toggleConfig() {
    const config = document.getElementById("config");
    applyFade(config, () => {
        config.style.display = config.style.display === "none" ? "block" : "none";
        if (config.style.display === "block") config.classList.add("fade-in");
    });
}

function applyConfig() {
    const tema = document.getElementById("tema").value;
    const idioma = document.getElementById("idioma").value;
    const container = document.querySelector(".container");
    applyFade(container, () => {
        document.body.className = `tema-${tema}`;
        idiomaActual = idioma;
        localStorage.setItem("tema", tema);
        localStorage.setItem("idioma", idioma);
        nuevaCapsula();
        updateText();
        start2000sGraphics(tema);
    });
}

// Actualizar textos según idioma
function updateText() {
    const texts = {
        es: { h2: "Organizador Dinámico", h3: "Agenda", btn1: "Cápsula Aleatoria", btn2: "Enviar a mi futuro yo", link: "Organizador Dinámico", config: "Configuración", back: "Volver a Principal" },
        en: { h2: "Dynamic Organizer", h3: "Agenda", btn1: "Random Capsule", btn2: "Send to My Future Self", link: "Dynamic Organizer", config: "Settings", back: "Back to Main" }
    };
    document.querySelector("#organizador h2").textContent = texts[idiomaActual].h2;
    document.querySelector("#agenda h3").textContent = texts[idiomaActual].h3;
    document.querySelector("button[onclick='nuevaCapsula()']").textContent = texts[idiomaActual].btn1;
    document.querySelector("button[onclick='enviar()']").textContent = texts[idiomaActual].btn2;
    document.querySelector("a").textContent = texts[idiomaActual].link;
    document.querySelector("#config h2").textContent = texts[idiomaActual].config;
    document.querySelector(".back-btn").textContent = texts[idiomaActual].back;
    updateAgenda();
}

// Test de personalidad
const personalityQuestions = [
    { question: "¿Qué prefieres leer?", options: ["Ciencia ficción", "Fantasía", "Historia", "Poesía", "Manuales técnicos", "Revistas de aventura", "Redes sociales", "Nada"] },
    { question: "¿Cuál es tu pasatiempo favorito?", options: ["Videojuegos", "Leer", "Dibujar", "Experimentos", "Deporte", "Socializar", "Meditar", "Reparar cosas"] },
    // Agrega las otras 7 preguntas aquí...
];

let personalityScore = { friki: 0, culto: 0, artista: 0, cientifico: 0, aventurero: 0, social: 0, relajado: 0, practico: 0, creativo: 0 };
let currentQuestion = 0;
let answers = {};

function showPersonalityTest() {
    currentQuestion = 0;
    answers = {};
    showQuestion();
    const test = document.getElementById("personality-test");
    applyFade(test, () => {
        test.style.display = "block";
        test.classList.add("fade-in");
    });
}

function showQuestion() {
    const testContent = document.getElementById("test-content");
    const question = personalityQuestions[currentQuestion];
    testContent.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map(o => `<label><input type="radio" name="q${currentQuestion}" value="${o}"> ${o}</label>`).join("<br>")}
    `;
    document.getElementById("current-question").textContent = currentQuestion + 1;
    document.getElementById("progress-bar").value = currentQuestion + 1;
    document.getElementById("prev-btn").style.display = currentQuestion === 0 ? "none" : "inline-block";
    document.getElementById("next-btn").style.display = currentQuestion < personalityQuestions.length - 1 ? "inline-block" : "none";
    document.getElementById("submit-btn").style.display = currentQuestion === personalityQuestions.length - 1 ? "inline-block" : "none";
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selected) {
        answers[currentQuestion] = selected.value;
        if (currentQuestion < personalityQuestions.length - 1) {
            currentQuestion++;
            showQuestion();
        }
    } else {
        alert("Selecciona una opción.");
    }
}

function submitTest() {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selected) {
        answers[currentQuestion] = selected.value;
        personalityScore = { friki: 0, culto: 0, artista: 0, cientifico: 0, aventurero: 0, social: 0, relajado: 0, practico: 0, creativo: 0 };
        Object.values(answers).forEach(value => {
            if (value === "Ciencia ficción" || value === "Videojuegos") personalityScore.friki += 2;
            if (value === "Fantasía" || value === "Historia" || value === "Leer") personalityScore.culto += 2;
            if (value === "Poesía" || value === "Dibujar") personalityScore.artista += 2;
            if (value === "Manuales técnicos" || value === "Experimentos") personalityScore.cientifico += 2;
            if (value === "Revistas de aventura" || value === "Deporte") personalityScore.aventurero += 2;
            if (value === "Redes sociales" || value === "Socializar") personalityScore.social += 2;
            if (value === "Meditar") personalityScore.relajado += 2;
            if (value === "Reparar cosas") personalityScore.practico += 2;
            if (value === "Nada") personalityScore.creativo += 2; // Ajusta según las opciones
        });
        const maxScore = Math.max(...Object.values(personalityScore));
        let userType = "Casual", icon = "👤";
        if (maxScore === personalityScore.friki) { userType = "Frikki"; icon = "🎮"; }
        else if (maxScore === personalityScore.culto) { userType = "Culta"; icon = "📚"; }
        else if (maxScore === personalityScore.artista) { userType = "Artista"; icon = "🎨"; }
        else if (maxScore === personalityScore.cientifico) { userType = "Científico"; icon = "🧪"; }
        else if (maxScore === personalityScore.aventurero) { userType = "Aventurero"; icon = "🧗‍♂️"; }
        else if (maxScore === personalityScore.social) { userType = "Social"; icon = "🗣️"; }
        else if (maxScore === personalityScore.relajado) { userType = "Relajado"; icon = "🧘‍♂️"; }
        else if (maxScore === personalityScore.practico) { userType = "Práctico"; icon = "🔧"; }
        else if (maxScore === personalityScore.creativo) { userType = "Creativo"; icon = "✍️"; }
        localStorage.setItem("userType", userType);
        localStorage.setItem("userIcon", icon);
        localStorage.setItem("startDate", localStorage.getItem("startDate") || new Date().toISOString().split("T")[0]);
        updateUserInfo();
        applyFade(document.getElementById("personality-test"), () => document.getElementById("personality-test").style.display = "none");
    } else {
        alert("Selecciona una opción.");
    }
}

// Info del usuario
function updateUserInfo() {
    const userType = localStorage.getItem("userType") || "Casual";
    const icon = localStorage.getItem("userIcon") || "👤";
    const startDate = localStorage.getItem("startDate");
    let score = startDate ? Math.floor((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24)) * 10 : 0;
    document.getElementById("user-info").innerHTML = `Usuario: ${icon} ${userType} | Puntaje: ${score} pts`;
}

// Gráficos interactivos
let animationFrameId;
function start2000sGraphics(tema) {
    const canvas = document.getElementById("interactive-2000s");
    canvas.style.display = "block";
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const elements = tema === "default" ? [
        { x: 50, y: 50, dx: 2, dy: 1, text: "⚙️", size: 30, color: "#00ffcc" },
        { x: 200, y: 100, dx: -1, dy: 2, text: "🚀", size: 40, color: "#00ffcc" }
    ] : tema === "frutiger-metro" ? [
        { x: 100, y: 100, dx: 1.5, dy: 1.5, text: "🔳", size: 25, color: "#333" },
        { x: 300, y: 200, dx: -1, dy: 2, text: "🔵", size: 35, color: "#666" }
    ] : tema === "frutiger-aero" ? [
        { x: 150, y: 150, dx: 2, dy: 1, text: "💧", size: 30, color: "#00aaff" },
        { x: 250, y: 250, dx: -1.5, dy: 2.5, text: "🌊", size: 40, color: "#00ccff" }
    ] : [];

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        elements.forEach(el => {
            ctx.fillStyle = el.color;
            ctx.font = `${el.size}px 'Courier New'`;
            ctx.fillText(el.text, el.x, el.y);
            el.x += el.dx;
            el.y += el.dy;
            if (el.x < 0 || el.x > canvas.width - el.size) el.dx *= -1;
            if (el.y < el.size || el.y > canvas.height) el.dy *= -1;
        });
        animationFrameId = requestAnimationFrame(animate);
    }
    animate();
}

function stop2000sGraphics() {
    const canvas = document.getElementById("interactive-2000s");
    canvas.style.display = "none";
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
}

// Inicio
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("userType")) showPersonalityTest();
    else {
        showCapsulaByDate();
        start2000sGraphics(temaActual);
    }
    updateText();
});
