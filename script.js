const yesBtn = document.getElementById("one");
const noBtn = document.getElementById("two");
const confettiContainer = document.getElementById("confetti-container");

let scale = 1;

// YES button
yesBtn.addEventListener("click", () => {
  alert("Thank you for choosing me to be yours,this valentine♥❤♥");
  launchConfetti();
});

// NO button runs away and shrinks
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  scale -= 0.1;
  if (scale < 0.4) scale = 0.4;

  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
});

function launchConfetti() {
  const hearts = ["❤", "🩷", "🤍"];
  const colors = ["#ff4d6d", "#ff85a1", "#ffffff"];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("span");
    confetti.classList.add("confetti");

    confetti.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}