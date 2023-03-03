const container = document.querySelector(`.container`);
const signUpBtn = document.querySelector(`.orange-bg__btn`);

signUpBtn.addEventListener(`click`, function () {
  container.classList.toggle(`change`);
});
