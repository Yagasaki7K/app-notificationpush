const config = {
    apiKey: "AIzaSyC8VzkQUdmmxsFEoQPQaE-dbys4MA9Oa1Y",
    authDomain: "sw-creditcards.firebaseapp.com",
    projectId: "sw-creditcards",
    storageBucket: "sw-creditcards.appspot.com",
    messagingSenderId: "1073108829169",
    appId: "1:1073108829169:web:eb1569a62c16f533dfba50",
    measurementId: "G-W50CWYMNT2"
};

const firebase = firebase.initializeApp(config)

messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Messaging from Cenário Capital'
    const options = {
        body: payload.data.status
    }
    return self.ServiceWorkerRegistration.showNotification(title, options);
})