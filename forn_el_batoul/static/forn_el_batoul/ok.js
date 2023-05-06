// trigger this function every time the user scrolls
document.addEventListener('DOMContentLoaded', (event) => {
    
    const el = document.querySelector(".scrolling-wrapper")
    const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
    );

    observer.observe(el);
});
