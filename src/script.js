function notificationPush() {
Notification.requestPermission();

if (!('serviceWorker' in navigator)) {
    console.log("Service Worker isn't supported on this browser, disable or hide UI.");
}

  if (!('PushManager' in window)) {
    console.log("Push isn't supported on this browser, disable or hide UI.");
}

requestPermission();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/notification-push/src/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

            const messaging = firebase.messaging();
            messaging.onTokenRefresh(function () {
                messaging.getToken()
                    .then(function (refreshedToken) {
                        console.log('Token refreshed.');
                        console.log(refreshedToken);
                        requestPermission();
                    })
                    .catch(function (err) {
                        console.log('Unable to retrieve refreshed token ', err);
                        // showToken('Unable to retrieve refreshed token ', err);
                    });
            });

            messaging.onMessage(function (payload) {
                console.log("Message received. ", payload);
                // ...
            });


        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

function requestPermission() {
    return new Promise(function(resolve, reject) {
      const permissionResult = Notification.requestPermission(function(result) {
        console.log('Handling deprecated version with callback.');
        resolve(result);
      });

        if (Notification.permission === 'granted') {
        } else if (Notification !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
            messageFirebase(permissionResult);
            }
        })
      }
    })
}


function messageFirebase(permissionResult) {
    if (permissionResult) {
        fetch('./database.json')
        const notification = new Notification('New message from Cenário Capital', {
        body: login
    })

    notification.onclick = () => {
        window.location.href = 'https://google.com.br'
        }
    }
}
}