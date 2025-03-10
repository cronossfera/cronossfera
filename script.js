// Configuración inicial
let idiomaActual = localStorage.getItem("idioma") || "es";
let temaActual = localStorage.getItem("tema") || "default";
document.body.className = `tema-${temaActual}`;

// Contador de visitas
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
document.getElementById("visit-counter").textContent = `Visitas: ${visitCount}`;

// Animación de desvanecimiento
function applyFade(element, callback) {
    if (!element) return;
    element.classList.remove("fade-in");
    element.classList.add("fade");
    setTimeout(() => {
        callback();
        element.classList.remove("fade");
        element.classList.add("fade-in");
        element.style.opacity = "1";
    }, 500);
}

// Modal para Zoom In
function showModal(text) {
    let modal = document.getElementById("modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "modal";
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-content">
                <p id="modal-text"></p>
                <button onclick="closeModal()">Cerrar</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    document.getElementById("modal-text").textContent = text;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "none";
}

// Mostrar cápsula por fecha
function showCapsulaByDate() {
    const today = new Date().toISOString().split("T")[0];
    const capsula = capsulas[idiomaActual].find(c => c.fecha === today) || capsulas[idiomaActual][0];
    const container = document.querySelector(".container");
    applyFade(container, () => {
        document.getElementById("dato").innerHTML = `Dato: ${capsula.dato} <span onclick="showModal('${capsula.datoZoom.replace(/'/g, "\\'")}')">[Zoom In]</span>`;
        document.getElementById("cita").innerHTML = `Cita: ${capsula.cita} <span onclick="showModal('${capsula.citaZoom.replace(/'/g, "\\'")}')">[Zoom In]</span>`;
        document.getElementById("recurso").innerHTML = `Recurso: ${capsula.recurso}`;
        container.style.display = "block";
        container.style.opacity = "1";
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
        document.getElementById("dato").innerHTML = `Dato: ${capsula.dato} <span onclick="showModal('${capsula.datoZoom.replace(/'/g, "\\'")}')">[Zoom In]</span>`;
        document.getElementById("cita").innerHTML = `Cita: ${capsula.cita} <span onclick="showModal('${capsula.citaZoom.replace(/'/g, "\\'")}')">[Zoom In]</span>`;
        document.getElementById("recurso").innerHTML = `Recurso: ${capsula.recurso}`;
        container.style.display = "block";
        container.style.opacity = "1";
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
        organizador.style.opacity = "1";
        stop2000sGraphics();
        checkPendingNotifications();
    });
}

// Volver a principal
function backToMain() {
    const organizador = document.getElementById("organizador");
    const config = document.getElementById("config");
    const test = document.getElementById("personality-test");
    const container = document.querySelector(".container");
    const elementToFade = organizador.style.display === "block" ? organizador : config.style.display === "block" ? config : test;
    applyFade(elementToFade, () => {
        organizador.style.display = "none";
        config.style.display = "none";
        test.style.display = "none";
        container.style.display = "block";
        container.classList.add("fade-in");
        container.style.opacity = "1";
        start2000sGraphics(temaActual);
        checkPendingNotifications();
    });
}

// Organizador dinámico
let items = JSON.parse(localStorage.getItem("items")) || [];
const today = new Date().toISOString().split("T")[0];
let sentNotifications = JSON.parse(localStorage.getItem("sentNotifications")) || [];

function addItem() {
    const categoria = document.getElementById("categoria").value;
    const texto = document.getElementById("entrada").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value || "00:00";
    if (texto && fecha) {
        items.push({ categoria, texto, fecha, hora });
        updateLista();
        document.getElementById("entrada").value = "";
        document.getElementById("hora").value = "";
        localStorage.setItem("items", JSON.stringify(items));
        checkPendingNotifications();
    }
}

function updateLista() {
    const listaDiv = document.getElementById("lista");
    listaDiv.innerHTML = items.map((item, index) => `
        <div class="item">
            <span>[${item.categoria}]</span> ${item.texto} - ${item.fecha} ${item.hora ? `a las ${item.hora}` : ''}
            <button onclick="deleteItem(${index})" style="background:#ff6666;">X</button>
        </div>
    `).join("");
    updateAgenda();
}

function deleteItem(index) {
    items.splice(index, 1);
    updateLista();
    localStorage.setItem("items", JSON.stringify(items));
    checkPendingNotifications();
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
            return navigator.serviceWorker.ready;
        }).then(() => {
            console.log('Service Worker está listo.');
            requestNotificationPermission();
        }).catch(err => {
            console.error('Error al registrar el Service Worker:', err);
        });
    } else {
        console.error('Service Workers no son compatibles con este navegador.');
        requestNotificationPermission(); // Fallback a notificaciones normales
    }
}

function requestNotificationPermission() {
    if ("Notification" in window) {
        if (Notification.permission !== "granted" && Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                console.log("Permiso de notificación:", permission);
                if (permission === "granted") {
                    checkPendingNotifications();
                }
            }).catch(err => {
                console.error("Error al solicitar permiso de notificación:", err);
            });
        } else if (Notification.permission === "granted") {
            checkPendingNotifications();
        }
    } else {
        console.error("Las notificaciones no son compatibles con este navegador.");
    }
}

function updateAgenda() {
    const recordatoriosDiv = document.getElementById("recordatorios");
    const hoyItems = items.filter(item => item.fecha <= today);
    const noRecTexts = {
        es: "No hay recordatorios para hoy.",
        en: "No reminders for today.",
        pt: "Nenhum lembrete para hoje.",
        jp: "今日のリマインダーはありません。",
        ko: "오늘 리마인더가 없습니다。",
        fr: "Aucun rappel pour aujourd'hui."
    };
    recordatoriosDiv.innerHTML = hoyItems.length > 0 
        ? hoyItems.map(item => `
            <div class="recordatorio ${item.fecha === today ? 'pendiente' : ''}">
                [${item.categoria}] ${item.texto} - ${item.fecha} ${item.hora ? `a las ${item.hora}` : ''} ${item.fecha === today ? '¡Hoy!' : ''}
            </div>
        `).join("")
        : `<p>${noRecTexts[idiomaActual]}</p>`;
}

function checkPendingNotifications() {
    console.log("Verificando notificaciones pendientes...");
    const hoyItems = items.filter(item => item.fecha === today);
    console.log("Tareas de hoy:", hoyItems);
    console.log("Permiso de notificación:", Notification.permission);

    if (Notification.permission === "granted") {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            navigator.serviceWorker.ready.then(registration => {
                hoyItems.forEach(item => {
                    const notificationId = `${item.categoria}-${item.texto}-${item.fecha}-${item.hora || ''}`;
                    if (!sentNotifications.includes(notificationId)) {
                        console.log("Enviando notificación push para:", item);
                        registration.showNotification("Cronosfera: Recordatorio", {
                            body: `[${item.categoria}] ${item.texto} ${item.hora ? `a las ${item.hora}` : ''}`
                            // icon: "favicon.ico" // Comentado para evitar problemas
                        }).catch(err => {
                            console.error("Error al mostrar notificación push:", err);
                        });
                        sentNotifications.push(notificationId);
                        localStorage.setItem("sentNotifications", JSON.stringify(sentNotifications));
                    } else {
                        console.log("Notificación ya enviada para:", notificationId);
                    }
                });
            });
        } else {
            // Fallback a notificaciones normales si no hay Service Worker
            hoyItems.forEach(item => {
                const notificationId = `${item.categoria}-${item.texto}-${item.fecha}-${item.hora || ''}`;
                if (!sentNotifications.includes(notificationId)) {
                    console.log("Enviando notificación normal para:", item);
                    try {
                        const notification = new Notification("Cronosfera: Recordatorio", {
                            body: `[${item.categoria}] ${item.texto} ${item.hora ? `a las ${item.hora}` : ''}`
                            // icon: "favicon.ico" // Comentado para evitar problemas
                        });
                        notification.onerror = (err) => {
                            console.error("Error al mostrar notificación:", err);
                        };
                        sentNotifications.push(notificationId);
                        localStorage.setItem("sentNotifications", JSON.stringify(sentNotifications));
                    } catch (err) {
                        console.error("Error al crear notificación:", err);
                    }
                } else {
                    console.log("Notificación ya enviada para:", notificationId);
                }
            });
        }
    } else {
        console.warn("Permiso de notificación no concedido.");
    }
}

// Configuración
function toggleConfig() {
    const config = document.getElementById("config");
    const container = document.querySelector(".container");
    const organizador = document.getElementById("organizador");
    const test = document.getElementById("personality-test");
    applyFade(config, () => {
        if (config.style.display === "none" || config.style.display === "") {
            container.style.display = "none";
            organizador.style.display = "none";
            test.style.display = "none";
            config.style.display = "block";
            config.classList.add("fade-in");
            config.style.opacity = "1";
        } else {
            backToMain();
        }
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
        es: { h2: "Organizador Dinámico", h3: "Agenda", btn1: "Cápsula Aleatoria", btn2: "Enviar a mi futuro yo", link: "Organizador Dinámico", config: "Configuración", back: "Volver a Principal", backConfig: "Atrás" },
        en: { h2: "Dynamic Organizer", h3: "Agenda", btn1: "Random Capsule", btn2: "Send to My Future Self", link: "Dynamic Organizer", config: "Settings", back: "Back to Main", backConfig: "Back" },
        pt: { h2: "Organizador Dinâmico", h3: "Agenda", btn1: "Cápsula Aleatória", btn2: "Enviar para Meu Futuro Eu", link: "Organizador Dinâmico", config: "Configurações", back: "Voltar ao Principal", backConfig: "Voltar" },
        jp: { h2: "ダイナミックオーガナイザー", h3: "アジェンダ", btn1: "ランダムカプセル", btn2: "未来の自分に送信", link: "ダイナミックオーガナイザー", config: "設定", back: "メインに戻る", backConfig: "戻る" },
        ko: { h2: "다이나믹 오거나이저", h3: "아젠다", btn1: "랜덤 캡슐", btn2: "미래의 나에게 보내기", link: "다이나믹 오거나이저", config: "설정", back: "메인으로 돌아가기", backConfig: "뒤로" },
        fr: { h2: "Organisateur Dynamique", h3: "Agenda", btn1: "Capsule Aléatoire", btn2: "Envoyer à Mon Futur Moi", link: "Organisateur Dynamique", config: "Paramètres", back: "Retour au Principal", backConfig: "Retour" }
    };
    document.querySelector("#organizador h2").textContent = texts[idiomaActual].h2;
    document.querySelector("#agenda h3").textContent = texts[idiomaActual].h3;
    document.querySelector("button[onclick='nuevaCapsula()']").textContent = texts[idiomaActual].btn1;
    document.querySelector("button[onclick='enviar()']").textContent = texts[idiomaActual].btn2;
    document.querySelector("a").textContent = texts[idiomaActual].link;
    document.querySelector("#config h2").textContent = texts[idiomaActual].config;
    document.querySelectorAll(".back-btn").forEach(btn => {
        if (btn.closest("#config")) {
            btn.textContent = texts[idiomaActual].backConfig;
        } else {
            btn.textContent = texts[idiomaActual].back;
        }
    });
    updateAgenda();
}

// Test de personalidad con 9 preguntas
const personalityQuestions = [
    { question: "¿Qué prefieres leer?", options: ["Ciencia ficción", "Fantasía", "Historia", "Poesía", "Manuales técnicos", "Revistas de aventura", "Redes sociales", "Nada"] },
    { question: "¿Cuál es tu pasatiempo favorito?", options: ["Videojuegos", "Leer", "Dibujar", "Experimentos", "Deporte", "Socializar", "Meditar", "Reparar cosas"] },
    { question: "¿Qué tipo de películas te gustan?", options: ["Acción", "Drama", "Comedia", "Documentales", "Terror", "Romance", "Animación", "Independientes"] },
    { question: "¿Cómo te describirías?", options: ["Creativo", "Analítico", "Social", "Aventurero", "Relajado", "Práctico", "Artístico", "Científico"] },
    { question: "¿Qué te gusta hacer en tu tiempo libre?", options: ["Jugar", "Estudiar", "Crear arte", "Explorar", "Hacer ejercicio", "Socializar", "Relajarme", "Arreglar cosas"] },
    { question: "¿Qué tipo de música prefieres?", options: ["Electrónica", "Clásica", "Rock", "Pop", "Jazz", "Hip-hop", "Indie", "Ninguna"] },
    { question: "¿Cuál es tu lugar ideal para vacaciones?", options: ["Playa", "Montaña", "Ciudad", "Bosque", "Desierto", "Espacio", "Casa", "Otro"] },
    { question: "¿Qué te motiva más?", options: ["Logros", "Conocimiento", "Creatividad", "Aventura", "Relaciones", "Bienestar", "Practicidad", "Arte"] },
    { question: "¿Cómo prefieres trabajar?", options: ["En equipo", "Solo", "Con un líder", "De manera creativa", "Con un plan", "Espontáneamente", "Con tecnología", "Con las manos"] }
];

let personalityScore = { friki: 0, culto: 0, artista: 0, cientifico: 0, aventurero: 0, social: 0, relajado: 0, practico: 0, creativo: 0 };
let currentQuestion = 0;
let answers = {};

function showPersonalityTest() {
    currentQuestion = 0;
    answers = {};
    showQuestion();
    const test = document.getElementById("personality-test");
    const container = document.querySelector(".container");
    applyFade(container, () => {
        container.style.display = "none";
        test.style.display = "block";
        test.classList.add("fade-in");
        test.style.opacity = "1";
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

function submitTest() {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selected) {
        answers[currentQuestion] = selected.value;
        personalityScore = { friki: 0, culto: 0, artista: 0, cientifico: 0, aventurero: 0, social: 0, relajado: 0, practico: 0, creativo: 0 };
        Object.values(answers).forEach(value => {
            if (value === "Ciencia ficción" || value === "Videojuegos") personalityScore.friki += 2;
            if (value === "Fantasía" || value === "Historia" || value === "Leer" || value === "Estudiar") personalityScore.culto += 2;
            if (value === "Poesía" || value === "Dibujar" || value === "Crear arte") personalityScore.artista += 2;
            if (value === "Manuales técnicos" || value === "Experimentos" || value === "Científico") personalityScore.cientifico += 2;
            if (value === "Revistas de aventura" || value === "Deporte" || value === "Explorar" || value === "Aventurero") personalityScore.aventurero += 2;
            if (value === "Redes sociales" || value === "Socializar" || value === "Social") personalityScore.social += 2;
            if (value === "Meditar" || value === "Relajarme" || value === "Relajado") personalityScore.relajado += 2;
            if (value === "Reparar cosas" || value === "Arreglar cosas" || value === "Práctico") personalityScore.practico += 2;
            if (value === "Creativo" || value === "De manera creativa") personalityScore.creativo += 2;
            if (value === "Acción" || value === "Terror") personalityScore.aventurero += 1;
            if (value === "Drama" || value === "Documentales") personalityScore.culto += 1;
            if (value === "Comedia" || value === "Romance") personalityScore.social += 1;
            if (value === "Animación" || value === "Independientes") personalityScore.artista += 1;
            if (value === "Analítico") personalityScore.cientifico += 2;
            if (value === "Artístico") personalityScore.artista += 2;
            if (value === "Hacer ejercicio") personalityScore.aventurero += 1;
            if (value === "Estudiar") personalityScore.culto += 1;
            if (value === "Electrónica") personalityScore.friki += 1;
            if (value === "Clásica" || value === "Jazz") personalityScore.culto += 1;
            if (value === "Rock" || value === "Indie") personalityScore.artista += 1;
            if (value === "Pop" || value === "Hip-hop") personalityScore.social += 1;
            if (value === "Playa" || value === "Casa") personalityScore.relajado += 1;
            if (value === "Montaña" || value === "Bosque" || value === "Desierto") personalityScore.aventurero += 1;
            if (value === "Ciudad") personalityScore.social += 1;
            if (value === "Espacio") personalityScore.friki += 1;
            if (value === "Logros") personalityScore.practico += 1;
            if (value === "Conocimiento") personalityScore.culto += 1;
            if (value === "Creatividad" || value === "Arte") personalityScore.creativo += 1;
            if (value === "Aventura") personalityScore.aventurero += 1;
            if (value === "Relaciones") personalityScore.social += 1;
            if (value === "Bienestar") personalityScore.relajado += 1;
            if (value === "Practicidad") personalityScore.practico += 1;
            if (value === "En equipo" || value === "Con un líder") personalityScore.social += 1;
            if (value === "Solo") personalityScore.relajado += 1;
            if (value === "Con un plan") personalityScore.practico += 1;
            if (value === "Espontáneamente") personalityScore.aventurero += 1;
            if (value === "Con tecnología") personalityScore.friki += 1;
            if (value === "Con las manos") personalityScore.practico += 1;
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
        else if (maxScore === personalityScore.practico) { userType = "Práctico"; icon = "
