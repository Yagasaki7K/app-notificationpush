self.addEventListener("fetch", function (event) {
    console.log(`Service Worker is ready!`)
});

function messageFirebase(permissionResult) {
    if (permissionResult) {
    const notification = new Notification('New message from Notification Push', {
        body: 'Hello. Now you gonna receive our notification',
        icon: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-pink-512.png', 
    })
  
    notification.onclick = () => {
        window.location.href = 'https://google.com.br'
        }
    }
}

let num = 1;

self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: 'Notification ' + num++,
            tag: 'swc',
        })
    );
});