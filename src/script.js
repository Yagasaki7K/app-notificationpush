function notificationPush() {
Notification.requestPermission();

if (!('serviceWorker' in navigator)) {
    console.log("Service Worker isn't supported on this browser, disable or hide UI.");
}

  if (!('PushManager' in window)) {
    console.log("Push isn't supported on this browser, disable or hide UI.");
}

requestPermission();
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
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
  window.addEventListener("beforeinstallprompt", function (e) {
    e.userChoice.then(function (choiceResult) {
      console.log(choiceResult.outcome);
      if (choiceResult.outcome == "dismissed") {
        console.log("User cancelled home screen install");
      } else {
        console.log("User added to home screen");
      }
    });
  });

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
    const notification = new Notification('New message from Cenário Capital', {
        body: 'Hello Yagasaki, I still working...',
        icon: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-pink-512.png', 
    })

    notification.onclick = () => {
        window.location.href = 'https://google.com.br'
        }
    }
}
}