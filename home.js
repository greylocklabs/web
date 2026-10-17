// The headline's last words take turns, unless the reader asked for less motion.
document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll("h1 .cycle span");
    if (words.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches)
        return;
    let shown = 0;
    setInterval(() => {
        words[shown].classList.remove("on");
        shown = (shown + 1) % words.length;
        words[shown].classList.add("on");
    }, 2800);
});
