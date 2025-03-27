document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".skill-list");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    leftBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -150, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: 150, behavior: "smooth" });
    });
});
