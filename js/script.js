const textElement = document.querySelector('.text');
const text = "Sometimes in life, What you're looking for is usually right under your nose, hidden in plain sight!";
const typingSpeed = 30;

let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

typeText();

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const rootElement = document.documentElement;
  
    
    darkModeToggle.addEventListener('click', () => {
      rootElement.classList.toggle('dark-mode');
    });
  });
  