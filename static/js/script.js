// update jam realtime di top bar
function updateTime() {
  const timeDisplay = document.getElementById('time-display');
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  timeDisplay.textContent = `${h}:${m}`;
}
setInterval(updateTime, 1000);
updateTime();

// compliment list
const compliments = [
  "Kamu luar biasa hari ini!",
  "Semangat terus ya!",
  "Kamu keren banget!",
  "Hari ini pasti penuh keberuntungan!",
  "Terus jadi versi terbaik dirimu!",
  "Kamu pantas dapat yang terbaik!",
  "Jangan lupa tersenyum hari ini!",
];

// chat handling
const form = document.getElementById('username-form');
const chatWindow = document.getElementById('chat-window');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('username');
  const username = input.value.trim();
  if (!username) return;

  // user bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'bubble user';
  userBubble.textContent = username;
  chatWindow.appendChild(userBubble);

  // compliment bubble dari Marjorie, delay 700ms
  setTimeout(() => {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    const complimentBubble = document.createElement('div');
    complimentBubble.className = 'bubble marjorie';
    complimentBubble.textContent = `You've got this message, ${username}! ${compliment}`;
    chatWindow.appendChild(complimentBubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, 700);

  input.value = '';
  chatWindow.scrollTop = chatWindow.scrollHeight;
});
