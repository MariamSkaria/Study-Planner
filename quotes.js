const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Success is the sum of small efforts, repeated.",
  "Every day is a chance to be better.",
  "Discipline is choosing what you want most over what you want now."
];

window.onload = function () {
  const quoteBox = document.getElementById('quoteBox');
  if (quoteBox) {
    setInterval(() => {
      const random = Math.floor(Math.random() * quotes.length);
      quoteBox.textContent = `"${quotes[random]}"`;
    }, 4000);
  }
};
