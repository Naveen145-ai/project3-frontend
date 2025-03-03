/*self.addEventListener("push", (event) => {
    const data = event.data ? event.data.json() : {};
    self.registration.showNotification(data.title, {
      body: data.message,
      icon: "/logo192.png", // Change to your app icon
    });
  });
  
  self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow("/")); // Redirect to homepage
  });
  */