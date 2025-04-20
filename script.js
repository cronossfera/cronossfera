// Variables globales
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let idiomaActual = localStorage.getItem('idioma') || 'es';
let temaActual = localStorage.getItem('tema') || 'default';
let fontActual = localStorage.getItem('font') || 'orbitron';
let autoTheme = localStorage.getItem('autoTheme') === 'true';
let highContrast = localStorage.getItem('highContrast') === 'true';

// Elementos del DOM
const taskInput = document.getElementById('entrada');
const prioritySelect = document.getElementById('priority');
const suggestionsDiv = document.getElementById('suggestions');
const organizadorBtn = document.getElementById('organizador-btn');
const settingsBtn = document.getElementById('settings-btn');
const addTaskBtn = document.getElementById('add-task-btn');
const backToMainFromOrganizador = document.getElementById('back-to-main-from-organizador');
const backToMainFromConfig = document.getElementById('back-to-main-from-config');
const backToMainFromTest = document.getElementById('back-to-main-from-test');
const backToMainFromFavorites = document.getElementById('back-to-main-from-favorites');
const backToMainFromStats = document.getElementById('back-to-main-from-stats');

// Autocompletado
const taskSuggestions = [
    "Enviar correo a cliente",
    "Preparar presentación",
    "Revisar informe mensual",
    "Llamar a proveedor",
    "Organizar reunión de equipo",
    "Actualizar base de datos",
    "Comprar materiales",
    "Planificar evento"
];

taskInput.addEventListener('input', () => {
    const query = taskInput.value.toLowerCase().trim();
    suggestionsDiv.innerHTML = '';
    suggestionsDiv.style.display = 'none';

    if (query === '') return;

    const filteredSuggestions = taskSuggestions.filter(s =>
        s.toLowerCase().includes(query)
    );

    if (filteredSuggestions.length > 0) {
        suggestionsDiv.style.display = 'block';
        filteredSuggestions.forEach(suggestion => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.textContent = suggestion;
            item.addEventListener('click', () => {
                taskInput.value = suggestion;
                suggestionsDiv.innerHTML = '';
                suggestionsDiv.style.display = 'none';
            });
            suggestionsDiv.appendChild(item);
        });
    }
});

document.addEventListener('click', (e) => {
    if (!taskInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
        suggestionsDiv.style.display = 'none';
    }
});

// Notificaciones push
function showPushNotification(title, body) {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(title, {
                body: body,
                icon: 'images/logo.png',
                badge: 'images/favicon.png'
            });
        });
    }
}

function showPopupNotification(title, body) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${title}</h3>
            <p>${body}</p>
            <button onclick="this.parentElement.parentElement.remove()">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Añadir tarea
function addTask() {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText === '') return;

    const task = {
        id: Date.now(),
        text: taskText,
        priority: priority,
        status: 'pending'
    };

    tasks.push(task);
    saveTasks();
    renderTasks();

    const title = 'Nueva Tarea Pendiente';
    const body = `Tarea: ${taskText} | Prioridad: ${priority}`;
    showPushNotification(title, body);
    showPopupNotification(title, body);

    taskInput.value = '';
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    tasks.forEach(task => {
        const item = document.createElement('div');
        item.className = `item ${task.priority} ${task.status}`;
        item.innerHTML = `
            <span>${task.text} (${task.priority}) - Estado: ${task.status}</span>
            <div>
                <button onclick="updateTaskStatus(${task.id}, 'completed')">Realizada</button>
                <button onclick="updateTaskStatus(${task.id}, 'discarded')">Descartar</button>
                <button onclick="deleteTask(${task.id})">Eliminar</button>
            </div>
        `;
        lista.appendChild(item);
    });
}

function updateTaskStatus(taskId, status) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.status = status;
        saveTasks();
        renderTasks();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasks();
    renderTasks();
}

// Transiciones entre secciones
function toggleSection(sectionId) {
    const sections = ['container', 'organizador', 'config', 'personality-test', 'custom-capsule-form', 'favorites', 'stats'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (id === sectionId) {
            section.style.display = 'block';
            section.classList.remove('fade');
            section.classList.add('fade-in');
        } else {
            section.style.display = 'none';
            section.classList.remove('fade-in');
            section.classList.add('fade');
        }
    });
}

// Eventos de botones
organizadorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSection('organizador');
});

settingsBtn.addEventListener('click', () => {
    toggleSection('config');
});

addTaskBtn.addEventListener('click', addTask);

backToMainFromOrganizador.addEventListener('click', () => {
    toggleSection('container');
});

backToMainFromConfig.addEventListener('click', () => {
    toggleSection('container');
});

backToMainFromTest.addEventListener('click', () => {
    toggleSection('container');
});

backToMainFromFavorites.addEventListener('click', () => {
    toggleSection('container');
});

backToMainFromStats.addEventListener('click', () => {
    toggleSection('container');
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    toggleSection('container');
});
