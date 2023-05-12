// Pizza price
function pizza_price(size){
    // Get the pizza price element
    console.log(size);
    pizza_price = document.querySelectorAll('.pizza_price');

    // Small size 200,000
    if (size === "small"){
        pizza_price.forEach(element => {
            console.log('300,000');
        });
    }
    // Medium size 300,000
    if (size === "medium"){
        pizza_price.forEach(element => {
            console.log('400,000');
        });
    }
    // Large size 400,000
    if (size === "large"){
        pizza_price.forEach(element => {
            console.log('500,000');
        });
    }
}
