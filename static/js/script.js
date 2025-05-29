const compliments = [
  "You're amazing just the way you are!",
  "Keep shining, beautiful soul!",
  "You're capable of amazing things!",
  "Your smile lights up the room!",
  "You've got this, keep going!",
  "You make the world better!",
  "Your kindness is contagious!",
  "Believe in yourself always!",
];

const chatWindow = document.getElementById("chat-window");
const form = document.getElementById("username-form");
const input = document.getElementById("username");
const timeDisplay = document.getElementById("time-display");

// Show current time (update every minute)
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  timeDisplay.textContent = formatted;
}
updateTime();
setInterval(updateTime, 60000);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = input.value.trim();
  if (!username) return;

  // Add user message bubble (no name)
  const userBubble = document.createElement("div");
  userBubble.classList.add("bubble", "user");
  userBubble.textContent = username;
  chatWindow.appendChild(userBubble);

  // Generate random compliment and show from Marjorie
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];
  const marjorieBubble = document.createElement("div");
  marjorieBubble.classList.add("bubble", "marjorie");
  marjorieBubble.textContent = `You've got this message, ${username}! ${compliment}`;
  chatWindow.appendChild(marjorieBubble);

  // Scroll chat to bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Clear input
  input.value = "";
});
