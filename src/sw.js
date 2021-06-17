self.addEventListener("fetch", function (event) {
    console.log(`Service Worker is ready!`)
});

self.addEventListener('push', function (event) {
    event.waitUntil(
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: 'Alea iacta est',
        })
    );
});