const favoriteButtons = document.querySelectorAll(".button.favorite");
const watchButtons = document.querySelectorAll(".button.watch");

favoriteButtons.forEach((item) => item.addEventListener("click", toggleActive));
watchButtons.forEach((item) => item.addEventListener("click", toggleActive));

function toggleActive(e) {
  button = e.target.parentElement;
  [...button.children].forEach((child) => {
    if (child.classList.contains("fa-circle-plus")) {
      child.classList.toggle("hidden");
    } else {
      child.classList.toggle("fa-regular");
      child.classList.toggle("fa-solid");
    }
  });
}
