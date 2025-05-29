 document.getElementById('username-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const message = document.getElementById('username').value;
  const chatWindow = document.getElementById('chat-window');

  // User bubble (tanpa nama)
  const userBubble = document.createElement('div');
  userBubble.className = 'bubble user';
  userBubble.textContent = message;
  chatWindow.appendChild(userBubble);

  // Random compliment dari Marjorie
  const compliments = [
    "Kamu luar biasa! 🌟",
    "Jangan lupa betapa kerennya kamu! 💖",
    "Selalu bersinar ya! ✨",
    "Kamu hebat dan penuh semangat! 🌈"
  ];
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  
  const marjorieBubble = document.createElement('div');
  marjorieBubble.className = 'bubble marjorie';
  marjorieBubble.textContent = randomCompliment;
  chatWindow.appendChild(marjorieBubble);

  chatWindow.scrollTop = chatWindow.scrollHeight; // auto scroll ke bawah
  document.getElementById('username').value = '';
});
