importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js')

const config = {
    apiKey: "AIzaSyC8VzkQUdmmxsFEoQPQaE-dbys4MA9Oa1Y",
    authDomain: "sw-creditcards.firebaseapp.com",
    projectId: "sw-creditcards",
    storageBucket: "sw-creditcards.appspot.com",
    messagingSenderId: "1073108829169",
    appId: "1:1073108829169:web:eb1569a62c16f533dfba50",
    measurementId: "G-W50CWYMNT2"
};

firebaseConfig.initializeApp(config)

const messaging = firebase.messaging();

messaging.requestPermission()
.then (function() {
    console.log('You have a permission')
    return messaging.getToken();
})
.then (function(token) {
    console.log(token)
})
.catch(function(err) {
    console.log('Error on permission')
})

messaging.onMessage(function(payload) {
    console.log('onMessage: ', payload)
});