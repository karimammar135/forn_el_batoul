
// When the dom is loaded
document.addEventListener('DOMContentLoaded', function() {

    bounce();
    // Bounce function
    function bounce() {
        // Get the search icon
        const serach_icon = document.querySelector('#search_icon');
        serach_icon.classList.add('fa-bounce');
        setTimeout(function() {serach_icon.classList.remove('fa-bounce')}, 1000)
    }

    // Every 3 seconds bounce the search icon
    setInterval(bounce, 3000);
    
});