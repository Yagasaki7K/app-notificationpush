console.log('Firebase is working ...')

window.onload = function showNotification() {

    if (!('serviceWorker' in navigator)) {
        console.log("Service Worker isn't supported on this browser, disable or hide UI.");
        return;
    }

      if (!('PushManager' in window)) {
        console.log("Push isn't supported on this browser, disable or hide UI.");
        return;
    }

    requestPermission();

    function requestPermission() {
        return new Promise(function(resolve, reject) {
          const permissionResult = Notification.requestPermission(function(result) {
            console.log('Handling deprecated version with callback.');
            resolve(result);
          });

          if (permissionResult) {
            const notification = new Notification('New message from Cenário Capital', {
                body: 'Hello Yagasaki, I still working...',
                icon: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-pink-512.png',
                
            })

            notification.onclick = () => {
                window.location.href = 'https://google.com.br'
            }
            }

            if (Notification.permission === 'granted') {
            } else if (Notification !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                showNotification();
                }
            })
          }
        })
        .then(function(permissionResult) {
          if (permissionResult !== 'granted') {
              console.log('Permissions of messaging is not allowed!')
          }
        });
      }
}