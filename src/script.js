function notificationPush() {

    Notification.requestPermission();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register("https://yagasaki7k.github.io/notification-push/src/sw.js")
            .then(function (registration) {
                // Registration was successful
                console.log(
                    "ServiceWorker registration successful with scope: ",
                    registration.scope
                );
            })
            .catch(function (err) {
                // registration failed :(
                console.log("ServiceWorker registration failed: ", err);
            });
    }

    requestPermission();

    function requestPermission() {
        return new Promise(function (resolve, reject) {
            const permissionResult = Notification.requestPermission(function (result) {
                console.log('Handling deprecated version with callback.');
                resolve(result);
            });

            if (Notification.permission === 'granted') {
            } else if (Notification !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        sendingMessage(permissionResult);
                    }
                })
            }
        })
    }

    function sendingMessage(permissionResult) {
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
}