const statement = "Seamless Hiring Solutions at Your Fingertips!";
const animationText = document.getElementById("animation-text");

function animateText(text, index) {
  if (index < text.length) {
    animationText.textContent += text[index];
    setTimeout(() => {
      animateText(text, index + 1);
    }, 100); // Adjust the delay (in milliseconds) between each character
  }
}
function toggleImagePop(element) {
  element.classList.toggle('active');
}





