self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Cronosfera: Recordatorio';
    const options = {
        body: data.body || 'Tienes un recordatorio pendiente.',
        icon: 'favicon.ico',
        badge: 'favicon.ico'
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
