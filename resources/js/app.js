import './bootstrap';

var userId = Math.random();

// Send a raw event (no HTTP needed)
function sendTyping() {
  window.Echo.connector.pusher.send_event(
    "UserIsTyping", // event name
    { userId }, // payload
    "message" // channel
  );
  console.log("Sending...");
}

// Example usage
document.getElementById("messageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted!");
  sendTyping();
});

// Listen for broadcast from server
window.Echo.channel("message")
  .listen("SendMessage", (e) => {
    console.log("Received: ", e.message);
  });

window.Echo.channel("message")
  .listen("UserIsTyping", (e) => {
    console.log(`Typing: User ${e.userId} is typing...`);
  });
