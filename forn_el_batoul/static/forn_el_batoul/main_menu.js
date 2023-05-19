// Load html page
document.addEventListener('DOMContentLoaded', function(){
    console.log('Loaded');
    // Default background
    document.querySelector('.slideshow-container').classList.add('background-0');
    document.querySelector('.slideshow-container').style.opacity = '1';
    document.querySelector('.dot-0 span').classList.add('active'); 
    document.querySelector('.dot-0').classList.add('wrapper_a'); 
    selectPrice('small');
});

let slide = 0;

// Automate slide show
var timer = setInterval( () =>{
    plusSlides(1);
}, 4000);

function currentSlide(n){
    slide = n-1;
    plusSlides(1);
}

function plusSlides(n){
    clearInterval(timer);
    timer = setInterval( () =>{
        plusSlides(1);
            
    }, 8000);

    slideshow_container = document.querySelector('.slideshow-container');
    slideshow_container.style.opacity = '0';
    setTimeout( () => {
        // Change background image
        if (n === 1){
            // If slide reaches maximum number of images make minus instead of plus
            if (slide >= 4){
                slide = 0;
            } else {
                slide ++;
            }
            
            // Remove other backgrounds
            slideshow_container.classList.remove(
                'background-0',
                'background-1',
                'background-2',
                'background-3',
                'background-4'
            );
            // Adjust new background
            slideshow_container.classList.add(`background-${slide}`);
            slideshow_container.style.opacity = '1';
        }
        if (n === -1){
            // If slide reaches minimum number of images make plus instead of minus
            if (slide == 0){
                slide = 2;
            } else {
                slide --;
            }

            // Remove other backgrounds
            slideshow_container.classList.remove(
                'background-0',
                'background-1',
                'background-2',
                'background-3',
                'background-4'
            );
            // Adjust new background
            slideshow_container.classList.add(`background-${slide}`);
            slideshow_container.style.opacity = '1';
        }

        // Active dot 
        document.querySelector('.dot-0 span').classList.remove('active');
        document.querySelector('.dot-1 span').classList.remove('active');
        document.querySelector('.dot-2 span').classList.remove('active');
        document.querySelector('.dot-3 span').classList.remove('active');
        document.querySelector('.dot-4 span').classList.remove('active');
        document.querySelector(`.dot-0`).classList.remove('wrapper_a'); 
        document.querySelector(`.dot-1`).classList.remove('wrapper_a'); 
        document.querySelector(`.dot-2`).classList.remove('wrapper_a'); 
        document.querySelector(`.dot-3`).classList.remove('wrapper_a'); 
        document.querySelector(`.dot-4`).classList.remove('wrapper_a'); 

        document.querySelector(`.dot-${slide} span`).classList.add('active');
        document.querySelector(`.dot-${slide}`).classList.add('wrapper_a'); 

    }, 400);
}

// trigger this function every time the user scrolls
document.addEventListener('DOMContentLoaded', (event) => {
    
    const el = document.querySelector(".scrolling-wrapper")
    const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
    );

    observer.observe(el);
});

// Pizza price
function selectPrice(size){
    var rates= document.getElementById("rates").innerHTML;
    var rates = JSON.parse(rates);
    
    const pricePlaceHolders = document.getElementsByClassName('pizza_price');
    for (let i = 0; i < pricePlaceHolders.length; i++){
        pricePlaceHolders[i].innerText = `${rates[size]},000 LBP`;
    }
    // Remove the all togles
    document.querySelector(`#small`).classList.remove("selected-size");
    document.querySelector(`#medium`).classList.remove("selected-size");
    document.querySelector(`#large`).classList.remove("selected-size");

    // Change button's style
    document.querySelector(`#${size}`).classList.toggle("selected-size");

}

// Edit price
function edit(action){
    // Get required html elements
    change_price_containers = document.querySelectorAll('.change_price_container');
    choice_prices = document.querySelectorAll('.choice_price');
    done_btn = document.querySelector('#done');

    if (action === 'edit'){
        // Eterate over each form and show it on the DOM
        change_price_containers.forEach(el => {
            el.style.display = 'flex';
        });

        // Eterate over each price span and hide it from the DOM
        choice_prices.forEach(el => {
            el.style.display = 'none';
        });

        // Show done btn
        done_btn.style.display = 'block';
    }
    else {
        // Eterate over each form and hide it on the DOM
        change_price_containers.forEach(el => {
            el.style.display = 'none';
        });

        // Eterate over each price span and hide it from the DOM
        choice_prices.forEach(el => {
            el.style.display = 'block';
        });

        // Hide done btn
        done_btn.style.display = 'none';
    }
}