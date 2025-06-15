const quotes = [
  "Discipline is choosing what you want most over what you want now.",
  "Focus on progress, not perfection.",
  "Small steps every day lead to big results.",
  "Your future is created by what you do today, not tomorrow.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Push yourself because no one else is going to do it for you.",
  "Stay focused and never give up!",
  "Dream big. Start small. Act now."
];

function loadNewQuote() {
  const quoteBox = document.getElementById('quoteBox');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.innerText = `"${quotes[randomIndex]}"`;
}

document.addEventListener('DOMContentLoaded', loadNewQuote);
