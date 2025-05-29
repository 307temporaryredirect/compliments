document.getElementById('username-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const chatWindow = document.getElementById('chat-window');

  // User bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'bubble user';
  userBubble.innerHTML = `<strong>${username}:</strong> ${username}`;
  chatWindow.appendChild(userBubble);

  // Random compliment
  const compliments = [
    "Kamu luar biasa! 🌟",
    "Jangan lupa betapa kerennya kamu! 💖",
    "Selalu bersinar ya! ✨",
    "Kamu hebat dan penuh semangat! 🌈"
  ];
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Marjorie reply bubble
  const marjorieBubble = document.createElement('div');
  marjorieBubble.className = 'bubble marjorie';
  marjorieBubble.innerHTML = `<strong>Marjorie:</strong> ${randomCompliment}`;
  chatWindow.appendChild(marjorieBubble);

  document.getElementById('username').value = '';
});
