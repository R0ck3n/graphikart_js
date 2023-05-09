/**
 *
 * @param {PointerEvent} e
 */
const reveal = (e) => {
  document.querySelectorAll(".spoiler").forEach((spoiler) => {
    spoiler.classList.remove("spoiler");
  });
};

document.querySelectorAll(".spoiler").forEach((el) => {
  el.addEventListener("click", reveal);
});
