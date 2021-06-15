self.addEventListener('install', event => {
    console.log('Service Worker installing.');
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
  });

function messagingFirebase() {
    messaging.setBackgroundMessageHandler(function(payload) {
        const title = 'Messaging from Cenário Capital'
        const options = {
            body: payload.data.status
        }
        return self.ServiceWorkerRegistration.showNotification(title, options);
    })
}