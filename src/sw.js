self.addEventListener("fetch", function (event) {
    console.log(`Service Worker is ready!`)
});

let num = 1;

self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: 'Notification ' + num++,
            tag: 'swc',
        })
    );
});