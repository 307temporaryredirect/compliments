
const compliments = [
  "You're amazing!",
  "Shine on, star!",
  "You're a gem!",
  "Smile brighter!",
  "Keep rocking!"
];

document.getElementById("flip-toggle").addEventListener("click", () => {
  document.getElementById("flip-container").querySelector(".flip-phone").classList.toggle("flipped");
});

document.getElementById("username-form").addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  if (!username) return;
  const message = `You've got this message, ${username}: ${compliments[Math.floor(Math.random() * compliments.length)]}`;
  const msgElem = document.createElement("div");
  msgElem.className = "chat-message";
  msgElem.textContent = message;
  document.getElementById("chat-window").appendChild(msgElem);
  document.getElementById("username").value = '';
});

function updateTime() {
  const now = new Date();
  const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
  document.getElementById("time-display").textContent = timeStr;
}
setInterval(updateTime, 1000);
updateTime();
