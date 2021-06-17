function messageFirebase(permissionResult) {
    if (permissionResult) {
    const notification = new Notification('New message fromNotification Push', {
        body: 'Hello. Now you gonna receive our notification',
        icon: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-pink-512.png', 
    })
  
    notification.onclick = () => {
        window.location.href = 'https://google.com.br'
        }
    }

    return notification;
  }