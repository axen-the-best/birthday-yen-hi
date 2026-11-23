
// ===== BIRTHDAY DATE CARD =====
const dateCard = document.querySelector(".date-card");

if (dateCard) {
    dateCard.innerHTML = `
        <p style="font-size: 13px; letter-spacing: 3px; text-transform: uppercase;">
            An occasion worth celebrating
        </p>
        <p style="font-size: 32px; margin-top: 10px;">
            XVI
        </p>
        <p style="font-size: 16px; margin-top: 5px;">
            A new chapter begins.
        </p>
    `;
}

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(".section, .ending");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});
