const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
cactus.classList.add("block");

const jump = () => {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
};

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

setInterval(() => {
  // Get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // Get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // Detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130) {
    cactus.classList.remove("block");
    if (window.confirm("Game over")) {
      cactus.classList.add("block");
    } else {
      window.close();
    }
  }
}, 10);
