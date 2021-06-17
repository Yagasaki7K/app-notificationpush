function notificationPush() {

Notification.requestPermission();

if ('serviceWorker' in navigator) {
    console.log("Service Worker isn't supported on this browser, disable or hide UI.");
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

    if ('PushManager' in window) {
        console.log("Push isn't supported on this browser, disable or hide UI.");
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
            messageFirebase();
            }
        })
      }
    })
  }
}