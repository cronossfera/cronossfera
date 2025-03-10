const capsulas = {
    es: [
        { fecha: "2025-03-02", dato: "Lanzamiento del iPhone 17 con IA.", datoZoom: "Apple mejora IA para fotos y traducción en tiempo real.", cita: "‘La tecnología simplifica la vida’ - Tim Cook.", citaZoom: "WWDC 2025, keynote principal.", recurso: "<a href='https://apple.com'>Noticia</a>" },
        { fecha: "2025-03-01", dato: "Acuerdo Climático Global en París.", datoZoom: "150 países firman metas de reducción de carbono.", cita: "‘El clima es nuestra responsabilidad’ - Greta Thunberg.", citaZoom: "COP30, discurso inaugural.", recurso: "<a href='https://un.org'>Detalles</a>" },
        { fecha: "2024-12-15", dato: "SpaceX lanza misión a Marte.", datoZoom: "Primera base modular enviada al planeta rojo.", cita: "‘Haremos de Marte un hogar’ - Elon Musk.", citaZoom: "Conferencia SpaceX 2024.", recurso: "<a href='https://spacex.com'>Informe</a>" },
        { fecha: "2025-01-20", dato: "Tesla presenta Cybertruck 2.0.", datoZoom: "Nueva versión con autonomía de 800 km.", cita: "‘El futuro es eléctrico’ - Elon Musk.", citaZoom: "Evento Tesla 2025.", recurso: "<a href='https://tesla.com'>Más info</a>" },
        { fecha: "2025-02-10", dato: "IA supera el Test de Turing.", datoZoom: "Primera IA indistinguible de un humano.", cita: "‘Un nuevo amanecer’ - Sundar Pichai.", citaZoom: "Google I/O 2025.", recurso: "<a href='https://google.com'>Artículo</a>" },
        // Agrega más entradas hasta 500 como desees
    ],
    en: [
        { fecha: "2025-03-02", dato: "iPhone 17 launch with AI.", datoZoom: "Apple enhances AI for photos and real-time translation.", cita: "‘Technology simplifies life’ - Tim Cook.", citaZoom: "WWDC 2025, main keynote.", recurso: "<a href='https://apple.com'>News</a>" },
        { fecha: "2025-03-01", dato: "Global Climate Agreement in Paris.", datoZoom: "150 countries sign carbon reduction targets.", cita: "‘The climate is our responsibility’ - Greta Thunberg.", citaZoom: "COP30, opening speech.", recurso: "<a href='https://un.org'>Details</a>" },
        // Más entradas...
    ],
    pt: [
        { fecha: "2025-03-02", dato: "Lançamento do iPhone 17 com IA.", datoZoom: "Apple melhora IA para fotos e tradução em tempo real.", cita: "‘A tecnologia simplifica a vida’ - Tim Cook.", citaZoom: "WWDC 2025, keynote principal.", recurso: "<a href='https://apple.com'>Notícia</a>" },
        // Más entradas...
    ],
    jp: [
        { fecha: "2025-03-02", dato: "iPhone 17がAIと共に発売。", datoZoom: "Appleが写真とリアルタイム翻訳用AIを改良。", cita: "‘技術は生活を簡略化する’ - ティム・クック", citaZoom: "WWDC 2025、メインノート。", recurso: "<a href='https://apple.com'>ニュース</a>" },
        // Más entradas...
    ],
    ko: [
        { fecha: "2025-03-02", dato: "iPhone 17이 AI와 함께 출시됨.", datoZoom: "Apple이 사진과 실시간 번역용 AI를 개선함.", cita: "‘기술은 삶을 단순화한다’ - 팀 쿡", citaZoom: "WWDC 2025, 메인 키노트.", recurso: "<a href='https://apple.com'>뉴스</a>" },
        // Más entradas...
    ],
    fr: [
        { fecha: "2025-03-02", dato: "Lancement de l'iPhone 17 avec IA.", datoZoom: "Apple améliore l'IA pour les photos et la traduction en temps réel.", cita: "‘La technologie simplifie la vie’ - Tim Cook.", citaZoom: "WWDC 2025, keynote principal.", recurso: "<a href='https://apple.com'>Nouvelles</a>" },
        // Más entradas...
    ]
};

if (typeof module !== "undefined") module.exports = capsulas;
else window.capsulas = capsulas;

let capsulas = JSON.parse(localStorage.getItem("capsulas")) || {
    es: [
        {
            fecha: "2024-10-21",
            dato: "El 21 de octubre de 2015 es la fecha en la que Marty McFly viaja al futuro en 'Regreso al Futuro II'.",
            datoZoom: "En la película, Marty y Doc Brown llegan a un 2015 futurista con autos voladores, zapatillas autoajustables y patinetas flotantes. Aunque no todo se hizo realidad, Nike lanzó unas zapatillas inspiradas en las de la película.",
            cita: "¡El futuro es lo que tú hagas de él, así que hazlo bueno! - Doc Brown",
            citaZoom: "Esta cita de Doc Brown nos recuerda que nuestras acciones de hoy moldean nuestro mañana. Es un llamado a tomar responsabilidad por nuestro propio destino.",
            recurso: "Mira 'Regreso al Futuro II' para inspirarte con un futuro lleno de posibilidades."
        },
        {
            fecha: "2024-10-22",
            dato: "El 22 de octubre de 1969 se envió el primer mensaje a través de ARPANET, el precursor de Internet.",
            datoZoom: "El mensaje fue enviado desde UCLA a Stanford. Solo se enviaron las letras 'LO' antes de que el sistema colapsara, pero marcó el inicio de la era de Internet.",
            cita: "La tecnología no es nada. Lo importante es que tengas fe en las personas. - Steve Jobs",
            citaZoom: "Steve Jobs destacó la importancia de confiar en el potencial humano para innovar y usar la tecnología como una herramienta para el progreso.",
            recurso: "Lee más sobre la historia de Internet en un libro como 'Where Wizards Stay Up Late'."
        }
    ],
    en: [
        {
            fecha: "2024-10-21",
            dato: "On October 21, 2015, Marty McFly travels to the future in 'Back to the Future II'.",
            datoZoom: "In the movie, Marty and Doc Brown arrive in a futuristic 2015 with flying cars, self-lacing sneakers, and hoverboards. While not everything came true, Nike released sneakers inspired by the film.",
            cita: "The future is whatever you make it, so make it a good one! - Doc Brown",
            citaZoom: "This quote from Doc Brown reminds us that our actions today shape our tomorrow. It’s a call to take responsibility for our own destiny.",
            recurso: "Watch 'Back to the Future II' to get inspired by a future full of possibilities."
        }
    ],
    pt: [
        {
            fecha: "2024-10-21",
            dato: "Em 21 de outubro de 2015, Marty McFly viaja para o futuro em 'De Volta para o Futuro II'.",
            datoZoom: "No filme, Marty e Doc Brown chegam a um 2015 futurista com carros voadores, tênis que se ajustam automaticamente e pranchas flutuantes. Embora nem tudo se tornou realidade, a Nike lançou um tênis inspirado no filme.",
            cita: "O futuro é o que você faz dele, então faça um bom futuro! - Doc Brown",
            citaZoom: "Essa citação de Doc Brown nos lembra que nossas ações hoje moldam nosso amanhã. É um chamado para assumirmos responsabilidade pelo nosso próprio destino.",
            recurso: "Assista 'De Volta para o Futuro II' para se inspirar com um futuro cheio de possibilidades."
        }
    ],
    jp: [
        {
            fecha: "2024-10-21",
            dato: "2015年10月21日は、『バック・トゥ・ザ・フューチャーPART2』でマーティ・マクフライが未来に旅立つ日です。",
            datoZoom: "映画では、マーティとドク・ブラウンが飛行車や自動で靴ひもが締まるスニーカー、ホバーボードがある未来の2015年に到着します。すべてが現実にはなりませんでしたが、ナイキは映画にインスパイアされたスニーカーを発売しました。",
            cita: "未来は君が作るものだ。だから良い未来にしよう！ - ドク・ブラウン",
            citaZoom: "ドク・ブラウンのこの言葉は、今日の行動が明日を形作ることを思い出させてくれます。自分の運命に責任を持つよう呼びかける言葉です。",
            recurso: "『バック・トゥ・ザ・フューチャーPART2』を観て、可能性に満ちた未来にインスパイアされてください。"
        }
    ],
    ko: [
        {
            fecha: "2024-10-21",
            dato: "2015년 10월 21일은 '백 투 더 퓨처 II'에서 마티 맥플라이가 미래로 여행하는 날입니다.",
            datoZoom: "영화에서 마티와 닥 브라운은 비행 자동차, 자동으로 끈이 조여지는 운동화, 호버보드가 있는 미래의 2015년에 도착합니다. 모든 것이 현실이 되지는 않았지만, 나이키는 영화에서 영감을 받은 운동화를 출시했습니다.",
            cita: "미래는 네가 만드는 거야, 그러니 좋은 미래를 만들자! - 닥 브라운",
            citaZoom: "닥 브라운의 이 말은 오늘의 행동이 내일을 만든다는 것을 상기시켜줍니다. 자신의 운명에 책임을 지라는 요청입니다.",
            recurso: "'백 투 더 퓨처 II'를 보고 가능성으로 가득한 미래에서 영감을 받아보세요."
        }
    ],
    fr: [
        {
            fecha: "2024-10-21",
            dato: "Le 21 octobre 2015 est la date à laquelle Marty McFly voyage dans le futur dans 'Retour vers le futur II'.",
            datoZoom: "Dans le film, Marty et Doc Brown arrivent dans un 2015 futuriste avec des voitures volantes, des baskets à lacets automatiques et des hoverboards. Bien que tout ne se soit pas réalisé, Nike a sorti des baskets inspirées du film.",
            cita: "L'avenir est ce que tu en fais, alors fais-en un bon ! - Doc Brown",
            citaZoom: "Cette citation de Doc Brown nous rappelle que nos actions d'aujourd'hui façonnent notre demain. C'est un appel à prendre la responsabilité de notre propre destin.",
            recurso: "Regardez 'Retour vers le futur II' pour vous inspirer d'un avenir rempli de possibilités."
        }
    ]
};

// Integración con APIs externas (Ejemplo con Quotable para citas)
async function fetchExternalCapsule() {
    try {
        const quoteResponse = await fetch('https://api.quotable.io/random');
        const quoteData = await quoteResponse.json();
        const factResponse = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const factData = await factResponse.json();
        const capsule = {
            fecha: new Date().toISOString().split("T")[0],
            dato: factData.text,
            datoZoom: "Dato obtenido de una API externa de hechos curiosos.",
            cita: quoteData.content,
            citaZoom: `Autor: ${quoteData.author}`,
            recurso: "Explora más en Quotable.io y UselessFacts."
        };
        capsulas[idiomaActual].push(capsule);
        localStorage.setItem("capsulas", JSON.stringify(capsulas));
    } catch (error) {
        console.error("Error al obtener cápsula externa:", error);
    }
}

// Llamar a la API al iniciar
fetchExternalCapsule();
