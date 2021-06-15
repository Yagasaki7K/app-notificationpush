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
                        // // Indicate that the new Instance ID token has not yet been sent to the
                        // // app server.
                        // setTokenSentToServer(false);
                        // // Send Instance ID token to app server.
                        // sendTokenToServer(refreshedToken);
                        // // [START_EXCLUDE]
                        // // Display new Instance ID token and clear UI of all previous messages.
                        // resetUI();
                        // // [END_EXCLUDE]
                        messagingFirebase();
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