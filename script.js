// HAMBURGER MENU
const toggle = document.createElement("div");
toggle.classList.add("menu-toggle");
toggle.innerText = "☰";
document.querySelector("header").appendChild(toggle);

const navList = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    navList.classList.toggle("show");
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        // Hide menu on mobile after clicking
        if (navList.classList.contains("show")) 
        {
            navList.classList.remove("show");
        }

        // Scroll with offset for fixed navbar
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        const headerOffset = document.querySelector("header").offsetHeight + 10;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

// ACTIVE LINK ON SCROLL
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + document.querySelector("header").offsetHeight + 20;

    links.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            sections.forEach(s => s.classList.remove("active-section"));
            section.classList.add("active-section");
        }
    });
});
