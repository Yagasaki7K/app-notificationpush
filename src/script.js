function registerNotification() {
	Notification.requestPermission(permission => {
		if (permission === 'granted'){ registerBackgroundSync() }
		else console.error("Permission was not granted.")
	})
}

function registerBackgroundSync() {
  if (!navigator.serviceWorker){
      return console.error("Service Worker not supported")
  }

  navigator.serviceWorker.ready
  .then(registration => registration.sync.register('syncAttendees'))
  .then(() => console.log("Registered background sync"))
  .catch(err => console.error("Error registering background sync", err))
}
   
function messageFirebase(permissionResult) {
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