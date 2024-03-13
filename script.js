const $ = (el) => document.querySelector(el);

$("button").onclick = function () {
  let dino = $(".dino");
  let cactus = $(".cactus");
  let score = 0;
  cactus.classList.add("slide");
  $("button").style.display = "none";
  $("p").style.display = "none";
  setInterval(() => {
    score++;
    $(".score").textContent = `score: ${score}`;
  }, 50);

  $("body").onkeydown = function jump() {
    if (dino.classList != "animate") dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  };

  setInterval(() => {
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );
    if (dinoTop >= 285 && cactusLeft > 100 && cactusLeft < 155) {
      cactus.classList.remove("slide");
      if (window.confirm(`YOU LOSE, score: ${score}`)) {
        history.go(0);
      } else {
        history.go(0);
      }
      score = 0;
    }
  });
};
