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
    "Kadang kita terlalu keras sama diri sendiri, lupa kalau kita juga manusia yang butuh jeda. {username}, you don’t have to be strong all the time or pretend to be happy every moment. It’s okay to take a break, to sit quietly with yourself, or even cry if you need to. What matters is you don’t lose yourself in the process. You deserve to feel peace, to be loved, and to feel seen. You are not alone, and you are so, so important.",
    "Everyone has their own timing, termasuk kamu, {username}. You don’t need to rush just to catch up with others, because your journey is yours. No need to compare yourself to anyone else; you’ve come this far and that’s amazing. Maybe today you’re not where you want to be, but trust me, every little step you take matters. You are enough, you’re strong, and you absolutely deserve to be happy.",
    "Kadang kita lupa how valuable we truly are. We tend to focus on our flaws and forget the kindness and courage we carry. {username}, you deserve love, not because of what you achieve, but because of who you are. Never let yourself feel invisible, because there are so many things in you worth celebrating. You are precious, inside and out.",
    "Mungkin rasanya kayak nobody really understands what you’re going through, {username}, but trust me, there are people who care, even if they don’t always say it. You can take a break, feel exhausted, and that doesn’t make you weak. You’re human, not a robot. Remind yourself: I am enough. I deserve to feel peace, to be loved, to be happy. You deserve to slow down and reconnect with yourself.",
    "You are special, {username}. Not because of how you look or what you’ve accomplished, but because of your warm heart and sincerity in living your life. Don’t ever feel less just because you’re different from others. The world needs people like you—genuine, kind, and willing to keep going. You don’t have to be perfect, just be yourself, and that’s already incredible. Don’t forget to give yourself a break and a smile today.",
    "Life is a roller coaster, penuh ups and downs yang kadang bikin kita capek. Tapi, {username}, remember that every time you fall, you also learn something new. You don’t have to rush to get back up—take your time, breathe, and start again with a calmer heart. You are stronger than you know. You deserve happiness, love, and to be appreciated for simply being you.",
    "Maybe today feels overwhelming, {username}, as if nothing’s going your way. But remember, you are stronger than you think. Every small step you take matters, no matter how tiny. Be proud of yourself, take a rest, and know that you are enough. There are so many good things waiting for you. You’re amazing, believe it.",
    "Jangan terlalu keras sama diri sendiri, {username}. You’re allowed to feel tired, disappointed, or confused. But don’t forget to forgive yourself, because you’re human. You’ve come so far, and that’s worth celebrating. You deserve happiness, to feel loved, and to be proud of who you are today.",
    "Ever felt like no one gets you? {username}, you’re not alone. Life can be confusing, can make you feel not enough, but trust me, you don’t need to prove anything to anyone. It’s okay to take a break, to cry, to rest. What’s important is you still love yourself. You are valuable, with or without all the achievements.",
    "Hari ini mungkin biasa aja buat orang lain, but for you, {username}, it’s one important small step. Don’t underestimate your efforts, no matter how small. The fact that you’re still here, still trying, is amazing. Be proud of yourself. You don’t need to be perfect to feel enough. You deserve happiness, love, and to believe that everything will be okay.",
    "Kalau dunia terasa too much, {username}, remind yourself: I am enough. You have a strong heart that, even when it cracks, still keeps going. Take a break, stay quiet, and let things flow. You deserve to be appreciated, to be loved, and to be happy. You’re amazing, even if today all you can do is breathe deeply and be still.",
    "Sometimes we forget to celebrate ourselves. {username}, remember every small win you’ve had. Waking up early, greeting others with a smile, finishing something you dreaded—they all count. You have so many reasons to be proud. Don’t let the world make you forget how amazing you are. You deserve happiness, love, and to feel enough.",
    "Not everything has to be perfect, {username}. You don’t need to be the best to be accepted. You’re enough with all your strengths and flaws. You deserve happiness, not because you have all the answers, but because you’re brave enough to try. You deserve to feel appreciated, even if you can’t make everyone happy. Don’t forget, your happiness matters.",
    "You don’t always have to be right, {username}. You’re allowed to make mistakes, to fail, to fall. What matters is you keep learning, keep getting up, and keep being you. Life isn’t about who’s fastest, but about who’s willing to keep moving forward, no matter how slow. You’re already amazing just by being here. Give yourself a warm hug today.",
    "Mungkin sekarang kamu ngerasa stuck banget, {username}. It feels like every path is blocked and there’s no clear direction. But trust me, sometimes all we need is time. It’s okay to slow down, to feel everything. Don’t rush decisions. You deserve space to reflect, to rest, to find your way again. You deserve happiness and to believe that everything will work out eventually.",
    "Sometimes life isn’t about rushing, {username}, but about how much we can enjoy the journey. You don’t have to be first; what matters is you keep going. Don’t forget to enjoy the morning breeze, the smiles around you, or the warmth of a good cup of tea. These moments make your journey more meaningful. You are enough, you’re amazing, and you deserve happiness. Remember, life’s not a race.",
    "You deserve to dream, {username}, no matter how big or small those dreams are. Don’t be afraid to hope, to set goals, to imagine a brighter future. The path may not be easy, but as long as you keep trying, it matters. You can fail, you can hesitate, but never stop believing in yourself. You have incredible potential, and you deserve to be happy in your own way.",
    "Not everyone will understand your path, {username}. And that’s okay. You don’t need to explain everything to everyone. You just need to believe that your steps are important, no matter how small. You deserve space to be yourself, to make mistakes, to learn. You have a big heart, and that’s amazing. Be proud of yourself today, because you’ve come so far.",
    "Kadang kita ngerasa sendirian, but actually, there are people who care and want to listen. {username}, don’t be afraid to open your heart, to share, to say you need a friend. You don’t have to keep it all in. You deserve to be heard, to be understood, to be loved. You’re not alone, and I believe you’ll be okay. You have so many reasons to keep believing in yourself.",
    "Not all your days will be bright, {username}. But that doesn’t mean you’re failing. You’re just pausing for a bit, so you can start again tomorrow with new energy. Don’t be too hard on yourself. You deserve space to breathe, to smile, to be happy. You don’t have to rush; just enjoy each step. You’re amazing, you deserve happiness, and you deserve to be loved sincerely."
    ];

    // Pilih compliment random
let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

// Ganti semua {username} di dalam kalimat dengan nama user yang diinput
randomCompliment = randomCompliment.replace(/\{username\}/g, username);

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
