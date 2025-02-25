declare const AOS: any;

window.addEventListener("load", () => {
    AOS.init();
});


// TEXTO ANIMADO
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll<HTMLElement>(".animate-text").forEach(el => {
        el.classList.add("text-animate");
    });
});


