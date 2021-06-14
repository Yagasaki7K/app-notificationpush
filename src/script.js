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