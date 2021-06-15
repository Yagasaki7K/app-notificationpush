messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Messaging from Cenário Capital'
    const options = {
        body: payload.data.status
    }
    return self.ServiceWorkerRegistration.showNotification(title, options);
})