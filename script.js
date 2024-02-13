const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "yieeeee happy valentines pre <3";
  gif.src = "cat-scream.gif";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "lah ayaw mo ba";
  gif.src = "sad-sad-cat.gif";

  noBtn.addEventListener("click", () => {
    question.innerHTML = "ayt gegege ios ios";
    gif.src = "Sad_Cat_Thumbs_Up.png";

    noBtn.addEventListener("click", () => {
      question.innerHTML = "LAH AYAW TALAGA";
      gif.src = "sad-cat-60.gif";
    });
  });
});