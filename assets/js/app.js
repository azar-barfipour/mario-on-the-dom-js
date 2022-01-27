function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#avatar");
const coin = document.querySelector("#coin");
const score = document.createElement("h2");
avatar.before(score);

let left = 100;
let avatarTop = 100;
const step = 20;
score.innerHTML = 0;

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    left < window.innerWidth - 100 ? (left += step) : left;
    avatar.style.left = `${left}px`;
    avatar.style.transform = "scale(1,1)";
  }
  if (event.key === "ArrowLeft") {
    left > 0 ? (left -= step) : left;
    avatar.style.left = `${left}px`;
    avatar.style.transform = "scale(-1,1)";
  }
  if (event.key === "ArrowUp") {
    avatarTop -= step;
    avatar.style.top = `${avatarTop}px`;
  }
  if (event.key === "ArrowDown") {
    avatarTop += step;
    avatar.style.top = `${avatarTop}px`;
  }
  if (isTouching(avatar, coin)) {
    const height = Math.floor(Math.random() * window.innerHeight - 100);
    const width = Math.floor(Math.random() * window.innerWidth - 100);
    coin.style.top = `${height}px`;
    coin.style.left = `${width}px`;
    new Audio("./smw_coin.wav").play();
    score.innerHTML = +score.innerHTML + 5;
  }
});
