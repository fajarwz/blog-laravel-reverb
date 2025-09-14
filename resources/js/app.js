import './bootstrap';

// Send a raw event (no HTTP needed)
function sendMessage(messageData) {
  window.Echo.connector.pusher.send_event(
    "SendMessage", // event name
    { message: messageData }, // payload
    "message" // channel
  );
  console.log("Sending message...");
}

// Example usage
document.getElementById("messageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted!");

  var message = document.getElementById("message");
  sendMessage(message.value);
  message.value = "";
});

// Listen for broadcast from server
window.Echo.channel("message")
  .listen("SendMessage", (e) => {
    console.log("Received: ", e.message);
  });
