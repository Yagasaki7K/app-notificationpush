importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js")

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
        })
        .catch(function (err) {
          console.log('Unable to retrieve refreshed token ', err);
          // showToken('Unable to retrieve refreshed token ', err);
        });
    });