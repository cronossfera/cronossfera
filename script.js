// Base de datos de cápsulas con traducciones
const capsulas = {
    es: [
        { dato: "El 1 de marzo de 1983, se lanzó el primer CD de audio comercial.", datoZoom: "Foto del Sony CDP-101: 74 minutos por Beethoven.", cita: "‘La mente que se abre a una nueva idea jamás vuelve a su tamaño original’ - Holmes.", citaZoom: "Dicho por un juez que también inventó un anestésico.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>Manual de electrónica básica de 1970</a>" },
        { dato: "El 13 de mayo de 1991, se publicó el primer estándar de MP3.", datoZoom: "Comprimió audio sin sacrificar demasiada calidad.", cita: "‘El arte es la mentira que nos permite ver la verdad’ - Picasso.", citaZoom: "Refleja su obsesión con la percepción.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>El retrato de Dorian Gray (texto libre)</a>" }
    ],
    en: [
        { dato: "On March 1, 1983, the first commercial audio CD was released.", datoZoom: "Photo of the Sony CDP-101: 74 minutes for Beethoven.", cita: "‘The mind that opens to a new idea never returns to its original size’ - Holmes.", citaZoom: "Said by a judge who also invented an anesthetic.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>Basic Electronics Manual from 1970</a>" },
        { dato: "On May 13, 1991, the first MP3 standard was published.", datoZoom: "Compressed audio without losing too much quality.", cita: "‘Art is the lie that lets us see the truth’ - Picasso.", citaZoom: "Reflects his obsession with perception.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>The Picture of Dorian Gray (free text)</a>" }
    ],
    fr: [
        { dato: "Le 1er mars 1983, le premier CD audio commercial a été lancé.", datoZoom: "Photo du Sony CDP-101 : 74 minutes pour Beethoven.", cita: "‘L’esprit qui s’ouvre à une nouvelle idée ne revient jamais à sa taille initiale’ - Holmes.", citaZoom: "Dit par un juge qui a aussi inventé un anesthésique.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>Manuel d'électronique de base de 1970</a>" },
        { dato: "Le 13 mai 1991, la première norme MP3 a été publiée.", datoZoom: "Compression audio sans trop perdre en qualité.", cita: "‘L’art est le mensonge qui nous permet de voir la vérité’ - Picasso.", citaZoom: "Reflète son obsession pour la perception.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>Le Portrait de Dorian Gray (texte libre)</a>" }
    ],
    de: [
        { dato: "Am 1. März 1983 wurde die erste kommerzielle Audio-CD veröffentlicht.", datoZoom: "Foto des Sony CDP-101: 74 Minuten für Beethoven.", cita: "‘Ein Geist, der sich einer neuen Idee öffnet, kehrt nie zu seiner ursprünglichen Größe zurück’ - Holmes.", citaZoom: "Gesagt von einem Richter, der auch ein Anästhetikum erfand.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>Grundlegendes Elektronikhandbuch von 1970</a>" },
        { dato: "Am 13. Mai 1991 wurde der erste MP3-Standard veröffentlicht.", datoZoom: "Komprimierte Audio ohne großen Qualitätsverlust.", cita: "‘Kunst ist die Lüge, die uns die Wahrheit sehen lässt’ - Picasso.", citaZoom: "Spiegelt seine Besessenheit mit Wahrnehmung wider.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>Das Bildnis des Dorian Gray (freier Text)</a>" }
    ],
    jp: [
        { dato: "1983年3月1日、初の商用オーディオCDが発売された。", datoZoom: "ソニーCDP-101の写真：ベートーヴェンのために74分。", cita: "‘新しいアイデアに開かれた心は元の大きさに戻らない’ - ホームズ。", citaZoom: "麻酔薬を発明した裁判官が言った。", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>1970年の基本電子マニュアル</a>" },
        { dato: "1991年5月13日、最初のMP3規格が公開された。", datoZoom: "品質をあまり犠牲にせずオーディオを圧縮。", cita: "‘芸術は真実を見せる嘘だ’ - ピカソ。", citaZoom: "彼の知覚への執着を反映している。", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>ドリアン・グレイの肖像 (無料テキスト)</a>" }
    ],
    klingon: [
        { dato: "1983 DIS wejmaH wa’DIch, wa’DIch CD ghom’a’ je vIlan.", datoZoom: "Sony CDP-101 qawHaq: BeethovenvaD 74 tup.", cita: "‘ghItlhvam chu’ vIje’DI’, not DaH vIneH’ - Holmes.", citaZoom: "ghu’vam je qoS qel je HoD.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>1970 qoS qel je ghItlhvam</a>" },
        { dato: "1991 DIS vaghmaH wejDIch, wa’DIch MP3 qel je vIlan.", datoZoom: "vIneH je tlhIngan ghogh vISaHbe’.", cita: "‘jeghpu’wI’ ghaH je qel je vIneH’ - Picasso.", citaZoom: "ghItlhvam je qel je vIneH.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>Dorian Gray je qel je ghItlhvam</a>" }
    ],
    elvish: [
        { dato: "I 1st o Martë 1983, i CD audio asëa arnanorë ná lantë.", datoZoom: "Sony CDP-101 sinyë: 74 lúmë Beethoven.", cita: "‘I meldë ya túla asëa mírë lámatya únë’ - Holmes.", citaZoom: "Nossë ar nís ya nanë asëa mírë.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>1970 arnanorë mírë</a>" },
        { dato: "I 13rd o Mairë 1991, i MP3 asëa arnanorë ná lantë.", datoZoom: "Lámatya únë asëa mírë.", cita: "‘I lúmë ya nanë asëa mírë ná matë’ - Picasso.", citaZoom: "I matë nanë asëa mírë.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>Dorian Gray asëa mírë</a>" }
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
    nuevaCapsula();
    updateText();
}

function updateText() {
    const texts = {
        es: { h1: "Cronosfera", h2: "Organizador Dinámico", h3: "Agenda", btn1: "Cápsula Aleatoria", btn2: "Enviar a mi futuro yo", link: "Organizador Dinámico", config: "Configuración", back: "Volver a Principal", noRec: "No hay recordatorios para hoy." },
        en: { h1: "Chronosphere", h2: "Dynamic Organizer", h3: "Agenda", btn1: "Random Capsule", btn2: "Send to My Future Self", link: "Dynamic Organizer", config: "Settings", back: "Back to Main", noRec: "No reminders for today." },
        fr: { h1: "Chronosphère", h2: "Organisateur Dynamique", h3: "Agenda", btn1: "Capsule Aléatoire", btn2: "Envoyer à Mon Futur Moi", link: "Organisateur Dynamique", config: "Paramètres", back: "Retour à la Principale", noRec: "Aucun rappel pour aujourd'hui." },
        de: { h1: "Chronosphäre", h2: "Dynamischer Organisator", h3: "Agenda", btn1: "Zufällige Kapsel", btn2: "An Mein Zukünftiges Ich Senden", link: "Dynamischer Organisator", config: "Einstellungen", back: "Zurück zur Hauptseite", noRec: "Keine Erinnerungen für heute." },
        jp: { h1: "クロノスフィア", h2: "ダイナミックオーガナイザー", h3: "アジェンダ", btn1: "ランダムカプセル", btn2: "未来の自分に送る", link: "ダイナミックオーガナイザー", config: "設定", back: "メインページに戻る", noRec: "今日のリマインダーはありません。" },
        klingon: { h1: "qronosfera", h2: "tlhIngan ghItlhvam", h3: "qa’meH", btn1: "ghItlhvam je", btn2: "vIneH je qel je", link: "tlhIngan ghItlhvam", config: "qel je", back: "ghItlhvam je qel", noRec: "DaHjaj qel je vIneHbe’." },
        elvish: { h1: "Cronosfera", h2: "Asëa Mírë", h3: "Lúmatya", btn1: "Mírë Asëa", btn2: "Annon Nan Ananta", link: "Asëa Mírë", config: "Sinda", back: "Nan Mírë", noRec: "Lámatya únë nan síra." }
    };
    document.querySelector("h1").textContent = texts[idiomaActual].h1;
    document.querySelector("#organizador h2").textContent = texts[idiomaActual].h2;
    document.querySelector("#agenda h3").textContent = texts[idiomaActual].h3;
    document.querySelector("button[onclick='nuevaCapsula()']").textContent = texts[idiomaActual].btn1;
    document.querySelector("button[onclick='enviar()']").textContent = texts[idiomaActual].btn2;
    document.querySelector("a").textContent = texts[idiomaActual].link;
    document.querySelector("#config h2").textContent = texts[idiomaActual].config;
    document.querySelector(".back-btn").textContent = texts[idiomaActual].back;
    updateAgenda();
}

// Cargar al iniciar
nuevaCapsula();
updateLista();
updateText();
