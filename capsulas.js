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
