importScripts('./script.js')

firebaseConfig.initializeApp(config)

const rootRef = firebase.database().ref();

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Messaging from Cenário Capital'
    const options = {
        body: payload.data.status
    }
    return self.ServiceWorkerRegistration.showNotification(title, options)
})
