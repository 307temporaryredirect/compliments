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
