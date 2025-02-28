import AOS from 'aos';
AOS.init({
    duration: 500,
});

// Mobile navigation
const navMobile = document.getElementById("navMobile");

function openNav() {
    if (navMobile) {
        navMobile.style.display = 'block';
    }
}

function closeNav() {
    if (navMobile) {
        navMobile.style.display = 'none';
    }
}

window.openNav = openNav;
window.closeNav = closeNav;

