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
        { dato: "1983年3月1日、初の商用オーディオCDが発売された。", datoZoom: "ソニーCDP-101の写真：ベートーヴェンのために74分。", cita: "「新しいアイデアに開かれた心は元の大きさに戻らない」 - ホームズ。", citaZoom: "麻酔薬を発明した裁判官が言った。", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>1970年の基本電子マニュアル</a>" },
        { dato: "1991年5月13日、最初のMP3規格が公開された。", datoZoom: "品質をあまり犠牲にせずオーディオを圧縮。", cita: "「芸術は真実を見せる嘘だ」 - ピカソ。", citaZoom: "彼の知覚への執着を反映している。", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>ドリアン・グレイの肖像 (無料テキスト)</a>" }
    ],
    ru: [
        { dato: "1 марта 1983 года был выпущен первый коммерческий аудио-CD.", datoZoom: "Фото Sony CDP-101: 74 минуты для Бетховена.", cita: "«Разум, открытый новой идее, никогда не возвращается к прежним размерам» - Холмс.", citaZoom: "Сказал судья, который также изобрел анестетик.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>Базовое руководство по электронике 1970 года</a>" },
        { dato: "13 мая 1991 года был опубликован первый стандарт MP3.", datoZoom: "Сжал аудио без значительной потери качества.", cita: "«Искусство - это ложь, которая позволяет нам увидеть правду» - Пикассо.", citaZoom: "Отражает его одержимость восприятием.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>Портрет Дориана Грея (бесплатный текст)</a>" }
    ],
    it: [
        { dato: "Il 1° marzo 1983 fu rilasciato il primo CD audio commerciale.", datoZoom: "Foto del Sony CDP-101: 74 minuti per Beethoven.", cita: "«La mente che si apre a una nuova idea non torna mai alla sua dimensione originale» - Holmes.", citaZoom: "Detto da un giudice che inventò anche un anestetico.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>Manuale base di elettronica del 1970</a>" },
        { dato: "Il 13 maggio 1991 fu pubblicato il primo standard MP3.", datoZoom: "Comprimeva l’audio senza perdere troppa qualità.", cita: "«L’arte è la menzogna che ci permette di vedere la verità» - Picasso.", citaZoom: "Riflette la sua ossessione per la percezione.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>Il ritratto di Dorian Gray (testo libero)</a>" }
    ],
    zh: [
        { dato: "1983年3月1日，首张商用音频CD发行。", datoZoom: "索尼CDP-101照片：为贝多芬设定的74分钟。", cita: "‘开放于新想法的心灵永远不会回到原来的大小’ - 福尔摩斯。", citaZoom: "由一位同时发明麻醉剂的法官所说。", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>1970年基础电子手册</a>" },
        { dato: "1991年5月13日，首个MP3标准发布。", datoZoom: "压缩音频而不损失太多质量。", cita: "‘艺术是让我们看到真相的谎言’ - 毕加索。", citaZoom: "反映了他对感知的痴迷。", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>多利安·格雷的画像 (免费文本)</a>" }
    ],
    ko: [
        { dato: "1983년 3월 1일, 최초의 상업용 오디오 CD가 출시되었다.", datoZoom: "소니 CDP-101 사진: 베토벤을 위한 74분.", cita: "‘새로운 아이디어에 열린 마음은 원래 크기로 돌아가지 않는다’ - 홈즈.", citaZoom: "마취제를 발명한 판사가 말했다.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>1970년 기본 전자 매뉴얼</a>" },
        { dato: "1991년 5월 13일, 최초의 MP3 표준이 발표되었다.", datoZoom: "품질 손실 없이 오디오를 압축함.", cita: "‘예술은 진실을 보게 하는 거짓이다’ - 피카소.", citaZoom: "그의 지각에 대한 집착을 반영함.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>도리안 그레이의 초상 (무료 텍스트)</a>" }
    ],
    tr: [
        { dato: "1 Mart 1983’te ilk ticari ses CD’si piyasaya sürüldü.", datoZoom: "Sony CDP-101 fotoğrafı: Beethoven için 74 dakika.", cita: "‘Yeni bir fikre açılan zihin asla eski boyutuna dönmez’ - Holmes.", citaZoom: "Bir anestezik icat eden hakim tarafından söylendi.", recurso: "<a href='https://archive.org/details/electronics-basics-1970'>1970 Temel Elektronik Kılavuzu</a>" },
        { dato: "13 Mayıs 1991’de ilk MP3 standardı yayımlandı.", datoZoom: "Ses kalitesini fazla kaybetmeden sıkıştırdı.", cita: "‘Sanat, gerçeği görmemizi sağlayan yalandır’ - Picasso.", citaZoom: "Algıya olan takıntısını yansıtır.", recurso: "<a href='https://www.gutenberg.org/ebooks/174'>Dorian Gray’in Portresi (ücretsiz metin)</a>" }
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
    if (tema === "2000s") {
        start2000sGraphics();
    } else {
        stop2000sGraphics();
    }
}

function updateText() {
    const texts = {
        es: { h1: "Cronosfera", h2: "Organizador Dinámico", h3: "Agenda", btn1: "Cápsula Aleatoria", btn2: "Enviar a mi futuro yo", link: "Organizador Dinámico", config: "Configuración", back: "Volver a Principal" },
        en: { h1: "Chronosphere", h2: "Dynamic Organizer", h3: "Agenda", btn1: "Random Capsule", btn2: "Send to My Future Self", link: "Dynamic Organizer", config: "Settings", back: "Back to Main" },
        fr: { h1: "Chronosphère", h2: "Organisateur Dynamique", h3: "Agenda", btn1: "Capsule Aléatoire", btn2: "Envoyer à Mon Futur Moi", link: "Organisateur Dynamique", config: "Paramètres", back: "Retour à la Principale" },
        de: { h1: "Chronosphäre", h2: "Dynamischer Organisator", h3: "Agenda", btn1: "Zufällige Kapsel", btn2: "An Mein Zukünftiges Ich Senden", link: "Dynamischer Organisator", config: "Einstellungen", back: "Zurück zur Hauptseite" },
        jp: { h1: "クロノスフィア", h2: "ダイナミックオーガナイザー", h3: "アジェンダ", btn1: "ランダムカプセル", btn2: "未来の自分に送る", link: "ダイナミックオーガナイザー", config: "設定", back: "メインページに戻る" },
        ru: { h1: "Хроносфера", h2: "Динамический Органайзер", h3: "Агенда", btn1: "Случайная Капсула", btn2: "Отправить Моему Будущему Я", link: "Динамический Органайзер", config: "Настройки", back: "Вернуться на Главную" },
        it: { h1: "Cronosfera", h2: "Organizzatore Dinamico", h3: "Agenda", btn1: "Capsula Casuale", btn2: "Invia al Mio Futuro Io", link: "Organizzatore Dinamico", config: "Impostazioni", back: "Torna alla Principale" },
        zh: { h1: "时空球", h2: "动态组织者", h3: "日程", btn1: "随机胶囊", btn2: "发送给未来的我", link: "动态组织者", config: "设置", back: "返回主页" },
        ko: { h1: "크로노스피어", h2: "다이내믹 오거나이저", h3: "아젠다", btn1: "랜덤 캡슐", btn2: "미래의 나에게 보내기", link: "다이내믹 오거나이저", config: "설정", back: "메인으로 돌아가기" },
        tr: { h1: "Kronosfer", h2: "Dinamik Organizatör", h3: "Ajanda", btn1: "Rastgele Kapsül", btn2: "Gelecekteki Bana Gönder", link: "Dinamik Organizatör", config: "Ayarlar", back: "Ana Sayfaya Dön" }
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

// Gráficos interactivos para 2000s
let animationFrameId;
function start2000sGraphics() {
    const canvas = document.getElementById("interactive-2000s");
    canvas.style.display = "block";
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cliparts = [
        { x: 50, y: 50, dx: 2, dy: 1, text: "☺", size: 30 },
        { x: 200, y: 100, dx: -1, dy: 2, text: "★", size: 40 },
        { x: 300, y: 150, dx: 1, dy: -1, text: "♪", size: 25 },
        { x: 100, y: 200, dx: -2, dy: 1, text: "♥", size: 35 }
    ];

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ff00ff";
        ctx.font = "30px 'Comic Sans MS'";

        cliparts.forEach(clip => {
            ctx.fillText(clip.text, clip.x, clip.y);
            clip.x += clip.dx;
            clip.y += clip.dy;

            if (clip.x < 0 || clip.x > canvas.width - clip.size) clip.dx *= -1;
            if (clip.y < clip.size || clip.y > canvas.height) clip.dy *= -1; // Ajuste para que no se salga por arriba
        });

        animationFrameId = requestAnimationFrame(animate);
    }
    animate();
}

function stop2000sGraphics() {
    const canvas = document.getElementById("interactive-2000s");
    canvas.style.display = "none";
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
}

// Cargar al iniciar
nuevaCapsula();
updateLista();
updateText();
if (temaActual === "2000s") {
    start2000sGraphics();
}
