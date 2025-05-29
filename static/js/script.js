document.getElementById('username-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('username');
  const username = usernameInput.value.trim();

  if (username) {
    const chatWindow = document.getElementById('chat-window');

    // Buat bubble chat user
    const userBubble = document.createElement('div');
    userBubble.classList.add('bubble', 'user');
    userBubble.textContent = username;
    chatWindow.appendChild(userBubble);

    // Random compliment list
    const compliments = [
      "Kamu luar biasa! 🌟",
      "Hari ini kamu hebat banget! 💪",
      "Selalu ada yang spesial darimu! ✨",
      "Semangat terus ya! 💖",
      "Kamu bikin hari ini lebih cerah! 🌈"
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    // Buat bubble chat Marjorie (random compliment)
    const marjorieBubble = document.createElement('div');
    marjorieBubble.classList.add('bubble', 'marjorie');
    marjorieBubble.textContent = randomCompliment;
    chatWindow.appendChild(marjorieBubble);

    // Scroll otomatis ke bawah
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Clear input
    usernameInput.value = '';
  }
});

// Update jam real-time
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('time-display').textContent = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
updateTime();

// Update battery level
function updateBatteryLevel() {
  const batteryLevel = document.querySelector('.battery-level');
  const level = Math.floor(Math.random() * 50) + 50; // Acak antara 50% - 100%
  batteryLevel.style.width = `${level}%`;
}
setInterval(updateBatteryLevel, 5000);
updateBatteryLevel();
