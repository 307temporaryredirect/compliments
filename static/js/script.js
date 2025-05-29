document.getElementById('username-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('username');
  const username = usernameInput.value.trim();

  if (username) {
    const chatWindow = document.getElementById('chat-window');

    // Bubble chat user
    const userBubble = document.createElement('div');
    userBubble.classList.add('bubble', 'user');
    userBubble.textContent = username;
    chatWindow.appendChild(userBubble);

    // Array compliment random
    const compliments = [
      "Kamu keren banget hari ini!",
      "Senyummu bikin hari cerah!",
      "Aku suka cara kamu berpikir!",
      "Kamu selalu membuatku terkesan.",
      "Tetap jadi diri sendiri ya, kamu istimewa!"
    ];

    // Pilih compliment random
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    // Delay sedikit biar natural, lalu tampilkan compliment dari Marjorie
    setTimeout(() => {
      const complimentBubble = document.createElement('div');
      complimentBubble.classList.add('bubble', 'marjorie');
      complimentBubble.textContent = randomCompliment;
      chatWindow.appendChild(complimentBubble);

      // Scroll ke bawah otomatis
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 600);

    // Scroll ke bawah otomatis setelah user input
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
