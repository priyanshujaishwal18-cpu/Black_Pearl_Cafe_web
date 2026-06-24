const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

const orderBtn = document.querySelector(".order-btn");

if (orderBtn) {
    orderBtn.addEventListener("mouseenter", () => {
        orderBtn.style.transform = "scale(1.08)";
    });

    orderBtn.addEventListener("mouseleave", () => {
        orderBtn.style.transform = "scale(1)";
    });
}
const socialBoxes = document.querySelectorAll(".social-box");

socialBoxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "translateY(-8px) scale(1.05)";
        box.style.transition = "0.3s";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "translateY(0px) scale(1)";

    });

});



const footerLinks = document.querySelectorAll(".footer-column a");

footerLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {

        link.style.paddingLeft = "8px";
        link.style.transition = "0.3s";

    });

    link.addEventListener("mouseleave", () => {

        link.style.paddingLeft = "0px";

    });

});