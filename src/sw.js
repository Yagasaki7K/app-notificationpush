self.addEventListener("fetch", function (event) {
    console.log(`Service Worker is ready!`)
});

let num = 1;

self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: 'Notification ' + num++,
            tag: 'swc',
        })
    );
});

self.addEventListener('sync', function(event) {
	console.log("sync event", event);
    if (event.tag === 'syncAttendees') {
        event.waitUntil(syncAttendees()); // sending sync request
    }
});

function syncAttendees(){
	return update({ url: `https://reqres.in/api/users` })
    	.then(refresh)
    	.then((attendees) => self.registration.showNotification(
    		`${attendees.length} attendees to the PWA Workshop`
    	))
}
