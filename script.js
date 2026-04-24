let count = 0;

function sendNotification() {
  const title = document.getElementById("title").value || "Alert";
  const message = document.getElementById("message").value;
  const icon = document.getElementById("icon").value || "https://cdn-icons-png.flaticon.com/512/1827/1827279.png";

  if (!message) {
    alert("Please enter a message");
    return;
  }

  console.log("Button clicked");

  Notification.requestPermission().then(permission => {
    console.log("Permission:", permission);

    if (permission === "granted") {
      setTimeout(() => {
        new Notification(title, {
          body: message,
          icon: icon
        });

        count++;
        document.getElementById("count").innerText =
          "Notifications sent: " + count;

      }, 5000);
    } else {
      alert("Permission denied");
    }
  });
}