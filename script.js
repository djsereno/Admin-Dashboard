const notificationBell = document.querySelector(".notifications");
const favoriteButtons = document.querySelectorAll(".card-button.favorite");
const watchButtons = document.querySelectorAll(".card-button.watch");

notificationBell.addEventListener("click", toggleActive);
favoriteButtons.forEach((item) => item.addEventListener("click", toggleActive));
watchButtons.forEach((item) => item.addEventListener("click", toggleActive));

function toggleActive(e) {
  e.currentTarget.classList.toggle("active");
}
