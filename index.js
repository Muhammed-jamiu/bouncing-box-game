const output = document.querySelector(".output");
const message = document.querySelector(".message");
const div = document.createElement("div");

const game = {
  timer: 0,
  startTime: null,
};
div.classList.add("cycle");
output.append(div);
message.textContent = "Press to Start";

function ranNum(max) {
  return Math.floor(Math.random() * max);
}

function addBox() {
  message.textContent = "Click it ...";
  game.startTime = new Date().getTime();
  div.style.display = "block";
  div.style.left = ranNum(450) + "px";
  div.style.top = ranNum(450) + "px";
}
div.addEventListener("click", () => {
  div.style.display = "none";
  div.textContent = "";
  game.timer = setInterval(addBox, ranNum(2000));
  if (!game.startTime) {
    message.textContent = "Loading ...";
  } else {
    const cur = new Date().getTime();
    const dur = (cur - game.startTime) / 100;
    message.textContent = `It took ${dur} seconds to click`;
  }
});
