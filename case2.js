const buttons = Array.from(document.querySelectorAll('.paginator a'));

const backBtn = buttons.find(b => b.textContent.trim().toLowerCase() === "prev");
const nextBtn = buttons.find(b => b.textContent.trim().toLowerCase() === "next");

addArrowNavigation(backBtn, nextBtn);
