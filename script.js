function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
window.addEventListener("load", function() {
    var loader = document.getElementById("preloader");
    loader.style.display = "none";
});