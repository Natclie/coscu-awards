// Mobile navigation
const navMobile = document.getElementById("navMobile");

function openNav() {
    if (navMobile) {
        navMobile.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeNav() {
    if (navMobile) {
        navMobile.style.display = 'none';
        document.body.style.overflow = '';
    }
}

window.openNav = openNav;
window.closeNav = closeNav;