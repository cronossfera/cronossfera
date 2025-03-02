// Base de datos de cápsulas con traducciones (más de 1000 ejemplos generados)
const capsulas = {
    es: [],
    en: [],
    fr: [],
    de: [],
    jp: [],
    ru: [],
    it: [],
    zh: [],
    ko: [],
    tr: []
};

// Generar más de 1000 cápsulas (simulación)
function generateCapsulas() {
    const fechas = [];
    const datos = ["Evento histórico", "Invento tecnológico", "Descubrimiento científico"];
    const citas = ["‘Cita profunda’ - Autor", "‘Frase inspiradora’ - Pensador", "‘Reflexión’ - Escritor"];
    const recursos = ["<a href='https://archive.org'>Recurso histórico</a>", "<a href='https://gutenberg.org'>Libro gratuito</a>", "<a href='https://youtube.com'>Video educativo</a>"];

    for (let year = 1900; year <= 2025; year++) {
        for (let month = 1; month <= 12; month++) {
            for (let day = 1; day <= 31; day++) {
                if (new Date(year, month - 1, day).getDate() === day) {
                    const fecha = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const idiomas = ['es', 'en', 'fr', 'de', 'jp', 'ru', 'it', 'zh', 'ko', 'tr'];
                    idiomas.forEach(lang => {
                        capsulas[lang].push({
                            fecha,
                            dato: `${datos[Math.floor(Math.random() * datos.length)]} del ${day}/${month}/${year}.`,
                            datoZoom: `Detalles: ${year} fue un año clave para esto.`,
                            cita: `${citas[Math.floor(Math.random() * citas.length)]}`,
                            citaZoom: `Contexto: ${lang === 'es' ? 'Pensamiento profundo' : lang === 'en' ? 'Deep thought' : 'Pensée profonde'}.`,
                            recurso: recursos[Math.floor(Math.random() * recursos.length)]
                        });
                    });
                }
            }
        }
    }
}
generateCapsulas();

// Configuración inicial
let idiomaActual = localStorage.getItem("idioma") || "es";
let temaActual = localStorage.getItem("tema") || "default";
document.body.className = `tema-${temaActual}`;

// Mostrar cápsula según la fecha actual
function showCapsulaByDate() {
    const today = new Date().toISOString().split("T")[0];
    const capsula = capsulas[idiomaActual].find(c => c.fecha === today);
    if (capsula) {
        document.getElementById("dato").innerHTML = `Dato: ${capsula.dato} <span onclick="alert('${capsula.datoZoom}')">[Zoom In]</span>`;
        document.getElementById("cita").innerHTML = `Cita: ${capsula.cita} <span onclick="alert('${capsula.citaZoom}')">[Zoom In]</span>`;
        document.getElementById("recurso").innerHTML = `Recurso: ${capsula.recurso}`;
    } else {
        nuevaCapsula();
    }
    updateUserInfo();
}

// Mostrar cápsula aleatoria
function nuevaCapsula() {
    const random = Math.floor(Math.random() * capsulas[idiomaActual].length);
    const capsula = capsulas[idiomaActual][random];
    document.getElementById("dato").innerHTML = `Dato: ${capsula.dato} <span onclick="alert('${capsula.datoZoom}')">[Zoom In]</span>`;
    document.getElementById("cita").innerHTML = `Cita: ${capsula.cita} <span onclick="alert('${capsula.citaZoom}')">[Zoom In]</span>`;
    document.getElementById("recurso").innerHTML = `Recurso: ${capsula.recurso}`;
    updateUserInfo();
}

// Enviar por email
function enviar() {
    const capsulaText = `${document.getElementById("dato").textContent}\n${document.getElementById("cita").textContent}\n${document.getElementById("recurso").textContent}`;
    window.location.href = `mailto:?subject=Cronosfera&body=${encodeURIComponent(capsulaText)}`;
}

// Mostrar organizador
function showOrganizador() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("organizador").style.display = "block";
}

// Volver a principal
function backToMain() {
    document.getElementById("organizador").style.display = "none";
    document.querySelector(".container").style.display = "block";
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
    const noRecTexts = {
        es: "No hay recordatorios para hoy.",
        en: "No reminders for today.",
        fr: "Aucun rappel pour aujourd'hui.",
        de: "Keine Erinnerungen für heute.",
        jp: "今日のリマインダーはありません。",
        ru: "Нет напоминаний на сегодня.",
        it: "Nessun promemoria per oggi.",
        zh: "今天没有提醒。",
        ko: "오늘은 리마인더가 없습니다。",
        tr: "Bugün için hatırlatıcı yok."
    };
    recordatoriosDiv.innerHTML = hoyItems.length > 0 
        ? hoyItems.map(item => `<div class="recordatorio">[${item.categoria}] ${item.texto} - ¡Hoy!</div>`).join("")
        : `<p>${noRecTexts[idiomaActual]}</p>`;
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
    nuevaCapsula();
    updateText();
    start2000sGraphics(tema);
}

// Test de personalidad con 6 tipos y 7 preguntas, una por sección
const personalityQuestions = [
    { question: "¿Qué tipo de libros prefieres leer: ciencia ficción, fantasía, historia, poesía o ninguno?", options: ["Ciencia ficción", "Fantasía", "Historia", "Poesía", "Ninguno"] },
    { question: "¿Qué tipo de videojuegos te gustan: complejos, casuales, estrategia o no juegas?", options: ["Complejos", "Casuales", "Estrategia", "No juego"] },
    { question: "¿Asistes a eventos de: cómics, anime, literatura o no asistes?", options: ["Cómics", "Anime", "Literatura", "No, nunca"] },
    { question: "¿Te interesa: tecnología futurista, arte clásico, ciencia o ninguna?", options: ["Tecnología futurista", "Arte clásico", "Ciencia", "Ninguna"] },
    { question: "¿Qué películas prefieres: sci-fi, drama, terror o comedias?", options: ["Sci-fi", "Drama", "Terror", "Comedias"] },
    { question: "¿Participas en debates sobre: cultura pop, filosofía, tecnología o no lo haces?", options: ["Cultura pop", "Filosofía", "Tecnología", "No lo hago"] },
    { question: "¿Tus hobbies incluyen: coleccionar figuras, leer clásicos, programar o nada?", options: ["Figuras", "Clásicos", "Programar", "Nada"] }
];

let personalityScore = { friki: 0, nerd: 0, culto: 0, artista: 0, cientifico: 0, casual: 0 };
let currentQuestion = 0;
let answers = {};

function showPersonalityTest() {
    currentQuestion = 0;
    answers = {};
    showQuestion();
    document.getElementById("personality-test").style.display = "block";
}

function showQuestion() {
    const testContent = document.getElementById("test-content");
    const question = personalityQuestions[currentQuestion];
    testContent.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map(o => `<label><input type="radio" name="q${currentQuestion}" value="${o}"> ${o}</label>`).join("<br>")}
    `;
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");
    prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
    nextBtn.style.display = currentQuestion < personalityQuestions.length - 1 ? "inline-block" : "none";
    submitBtn.style.display = currentQuestion === personalityQuestions.length - 1 ? "inline-block" : "none";
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
        alert("Selecciona una opción antes de continuar.");
    }
}

function submitTest() {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selected) {
        answers[currentQuestion] = selected.value;
        personalityScore = { friki: 0, nerd: 0, culto: 0, artista: 0, cientifico: 0, casual: 0 };
        Object.values(answers).forEach(value => {
            if (["Ciencia ficción", "Complejos", "Cómics", "Tecnología futurista", "Sci-fi", "Cultura pop", "Figuras"].includes(value)) personalityScore.friki += 2;
            if (["Estrategia", "Ciencia", "Programar"].includes(value)) personalityScore.nerd += 2;
            if (["Fantasía", "Historia", "Literatura", "Filosofía", "Clásicos"].includes(value)) personalityScore.culto += 2;
            if (["Poesía", "Arte clásico", "Drama"].includes(value)) personalityScore.artista += 2;
            if (["Terror"].includes(value)) personalityScore.cientifico += 2;
            if (["Casuales", "No juego", "No, nunca", "Ninguno", "Comedias", "Nada"].includes(value)) personalityScore.casual += 2;
        });
        const maxScore = Math.max(personalityScore.friki, personalityScore.nerd, personalityScore.culto, personalityScore.artista, personalityScore.cientifico, personalityScore.casual);
        let userType = "Casual";
        let icon = "👤";
        if (maxScore === personalityScore.friki) { userType = "Frikki"; icon = "🎮"; }
        else if (maxScore === personalityScore.nerd) { userType = "Nerd"; icon = "💻"; }
        else if (maxScore === personalityScore.culto) { userType = "Culta"; icon = "📚"; }
        else if (maxScore === personalityScore.artista) { userType = "Artista"; icon = "🎨"; }
        else if (maxScore === personalityScore.cientifico) { userType = "Científico"; icon = "🔬"; }
        localStorage.setItem("userType", userType);
        localStorage.setItem("userIcon", icon);
        localStorage.setItem("startDate", localStorage.getItem("startDate") || new Date().toISOString().split("T")[0]);
        updateUserInfo();
        closeTest();
    } else {
        alert("Selecciona una opción antes de enviar.");
    }
}

function closeTest() {
    document.getElementById("personality-test").style.display = "none";
}

// Mostrar info del usuario
function updateUserInfo() {
    const userType = localStorage.getItem("userType") || "Casual";
    const icon = localStorage.getItem("userIcon") || "👤";
    const startDate = localStorage.getItem("startDate");
    let score = 0;
    if (startDate) {
        const diffDays = Math.floor((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24));
        score = diffDays * 10; // 10 puntos por día
    }
    document.getElementById("user-info").innerHTML = `Usuario: ${icon} ${userType} | Puntaje: ${score} pts`;
}

// Gráficos interactivos para todos los temas
let animationFrameId;
function start2000sGraphics(tema) {
    const canvas = document.getElementById("interactive-2000s");
    if (!canvas) {
        console.error("Canvas no encontrado. Asegúrate de que el ID es 'interactive-2000s' en el HTML.");
        return;
    }
    canvas.style.display = "block";
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let elements = [];
    switch (tema) {
        case "default": // Sci-Fi
            elements = [
                { x: 50, y: 50, dx: 2, dy: 1, text: "⚙️", size: 30, color: "#00ffcc" },
                { x: 200, y: 100, dx: -1, dy: 2, text: "🚀", size: 40, color: "#00ffcc" },
                { x: 300, y: 150, dx: 1, dy: -1, text: "🖥️", size: 25, color: "#00ffcc" },
                { x: 100, y: 200, dx: -2, dy: 1, text: "🤖", size: 35, color: "#00ffcc" }
            ];
            break;
        case "2000s": // Años 2000
            elements = [
                { x: 50, y: 50, dx: 2, dy: 1, text: "☺", size: 30, color: "#ff00ff" },
                { x: 200, y: 100, dx: -1, dy: 2, text: "★", size: 40, color: "#ff00ff" },
                { x: 300, y: 150, dx: 1, dy: -1, text: "♪", size: 25, color: "#ff00ff" },
                { x: 100, y: 200, dx: -2, dy: 1, text: "♥", size: 35, color: "#ff00ff" },
                { x: 150, y: 250, dx: 1.5, dy: -1.5, text: "✿", size: 30, color: "#ffff00" }
            ];
            break;
        case "pastel": // Pastel
            elements = [
                { x: 50, y: 50, dx: 1, dy: 1, text: "🌸", size: 30, color: "#ff9999" },
                { x: 200, y: 100, dx: -1, dy: 2, text: "🦋", size: 35, color: "#b8e1ff" },
                { x: 300, y: 150, dx: 2, dy: -1, text: "☁️", size: 25, color: "#ffd6e8" },
                { x: 100, y: 200, dx: -1.5, dy: 1.5, text: "🌈", size: 40, color: "#8c6fa3" }
            ];
            break;
        case "vaporwave": // Vaporwave
            elements = [
                { x: 50, y: 50, dx: 2, dy: 1, text: "📼", size: 30, color: "#ff00ff" },
                { x: 200, y: 100, dx: -1, dy: 2, text: "🌴", size: 40, color: "#ff6ec4" },
                { x: 300, y: 150, dx: 1, dy: -1, text: "🖥️", size: 25, color: "#7873f5" },
                { x: 100, y: 200, dx: -2, dy: 1, text: "☀️", size: 35, color: "#ff00ff" }
            ];
            break;
        case "dark-academia": // Dark Academia
            elements = [
                { x: 50, y: 50, dx: 1, dy: 1, text: "📚", size: 30, color: "#d4a373" },
                { x: 200, y: 100, dx: -1, dy: 2, text: "🕯️", size: 35, color: "#8c5523" },
                { x: 300, y: 150, dx: 2, dy: -1, text: "✒️", size: 25, color: "#d4a373" },
                { x: 100, y: 200, dx: -1.5, dy: 1.5, text: "🦇", size: 30, color: "#8c5523" }
            ];
            break;
        case "cyberpunk": // Cyberpunk
            elements = [
                { x: 50, y: 50, dx: 2, dy: 1, text: "💾", size: 30, color: "#ff2079" },
                { x: 200, y: 100, dx: -1, dy: 2, text: "🌃", size: 40, color: "#00f7ff" },
                { x: 300, y: 150, dx: 1, dy: -1, text: "🤖", size: 25, color: "#ff2079" },
                { x: 100, y: 200, dx: -2, dy: 1, text: "⚡", size: 35, color: "#00f7ff" }
            ];
            break;
        case "retro-game": // Retro Game
            elements = [
                { x: 50, y: 50, dx: 2, dy: 1, text: "🎮", size: 30, color: "#00ff00" },
                { x: 200, y: 100, dx: -1, dy: 2, text: "👾", size: 40, color: "#00ff00" },
                { x: 300, y: 150, dx: 1, dy: -1, text: "🕹️", size: 25, color: "#00ff00" },
                { x: 100, y: 200, dx: -2, dy: 1, text: "💰", size: 35, color: "#00ff00" }
            ];
            break;
        case "galaxy": // Galaxia
            elements = [
                { x: 50, y: 50, dx: 1, dy: 1, text: "⭐", size: 30, color: "#b300ff" },
                { x: 200, y: 100, dx: -1, dy: 2, text: "🌌", size: 40, color: "#e6e6ff" },
                { x: 300, y: 150, dx: 2, dy: -1, text: "🪐", size: 25, color: "#b300ff" },
                { x: 100, y: 200, dx: -1.5, dy: 1.5, text: "✨", size: 35, color: "#e6e6ff" },
                { x: 150, y: 250, dx: 1.5, dy: -1.5, text: "☄️", size: 30, color: "#b300ff" }
            ];
            break;
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        elements.forEach(el => {
            ctx.fillStyle = el.color;
            ctx.font = `${el.size}px ${tema === "retro-game" ? "'Press Start 2P'" : "'Courier New'"}`;
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
    if (canvas) {
        canvas.style.display = "none";
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    } else {
        console.error("Canvas no encontrado. Asegúrate de que el ID es 'interactive-2000s' en el HTML.");
    }
}

// Mostrar test al entrar
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("userType")) {
        showPersonalityTest();
    } else {
        showCapsulaByDate();
    }
});
