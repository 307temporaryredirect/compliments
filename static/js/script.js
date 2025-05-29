document.getElementById('username-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('username');
  const username = usernameInput.value.trim();

  if (username) {
    const chatWindow = document.getElementById('chat-window');

    const compliments = [
      "Kamu keren banget!",
      "Aku suka caramu tersenyum.",
      "Semangat terus ya!",
      "Kamu bikin hariku jadi cerah!",
      "Keren banget style kamu!"
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    // Buat bubble chat user
    const userBubble = document.createElement('div');
    userBubble.classList.add('bubble', 'user');
    userBubble.textContent = `${username}, ${randomCompliment}`;
    chatWindow.appendChild(userBubble);

    // Scroll ke bawah otomatis
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Clear input
    usernameInput.value = '';
  }
});

// Update jam secara real-time
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('time-display').textContent = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
updateTime();

function updateBatteryLevel() {
  const batteryLevel = document.querySelector('.battery-level');
  const level = Math.floor(Math.random() * 100) + 1; // Random antara 1-100%
  batteryLevel.style.width = `${level}%`;
}
setInterval(updateBatteryLevel, 5000); // Update setiap 5 detik
updateBatteryLevel(); // Panggil pertama kali
