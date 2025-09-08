function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message);
  input.value = "";

  // Simulated AI response
  setTimeout(() => {
    const response = getBotResponse(message);
    appendMessage("Bot", response);
  }, 500);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message){
  const lower=message.toLowerCase();
  //creating custom responses for the chatbot queries
  if(lower.includes("name")) return "I'm your Mitra, a good friend to guide you.";
  if(lower.includes("hello")) return "Hi there! How can I help you today?";
  if(lower.includes("hi")) return "Hi there! How can I help you today?";
  if(lower.includes("hey")) return "Hi there! How can I help you today?";
  if(lower.includes("bye")) return "Goodbye! Have a great day!";
  if(lower.includes("creator")) return "I was created by the Jathi Ratnalu team(shamika, sathvik, vineet, himatej) to help students easily access resources and get quick answers.";
  if(lower.includes("purpose")) return "This website is designed to provide students with study materials, previous year question papers, subject notes, and useful academic guidance.";

  }

/*
function getBotResponse(message) {
  const lower = message.toLowerCase();
  if (lower.includes("hello")) return "Hi there! How can I help you today?";
  if (lower.includes("name")) return "I'm your friendly AI chatbot.";
  if (lower.includes("bye")) return "Goodbye! Have a great day!";
  return "I'm not sure how to respond to that. Try asking something else!";
}
*/
