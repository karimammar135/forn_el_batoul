
// After loading the html page
document.addEventListener('DOMContentLoaded', function() {
    // Identify which page this javascript code is running in
    const page = document.querySelector('[name="page"]');

    // If index page save selected language in the local storage
    if (page.value === 'select-language') {
        // If english language is choosed set the value of language in local storage to english
        document.querySelector('#english').onclick = function(){
            // Save or update the language to english
            localStorage.setItem('language', 'english');
        }

        // If arabic language is choosed set the value of language in local storage to arabic
        document.querySelector('#arabic').onclick = function(){
            // Save or update the language to arabic
            localStorage.setItem('language', 'arabic');
        } 
    } 
    
    // If home page change the inner html of the items according to the language selected by the user
    else {
        // Get all elements that there value will be changed
        heading_title = document.querySelector('#heading_title');
        search_placeholder = document.querySelector('[placeholder="Search Food"]');
        img_text = document.querySelector('#img_text');
        food_categories_title = document.querySelector('#food_categories_title');
        view_all = document.querySelector('#view_all');
        manakesh = document.querySelector('.manakesh .category-footer .category-name');
        pizza = document.querySelector('.pizza .category-footer .category-name');
        pastries = document.querySelector('.pastries .category-footer .category-name');
        snacks = document.querySelector('.snacks .category-footer .category-name');
        drop_1  = document.querySelector('.drop_1');
        drop_2  = document.querySelector('.drop_2');
        drop_3  = document.querySelector('.drop_3');
        drop_4  = document.querySelector('.drop_4');
        drop_5  = document.querySelector('.drop_5');

        const elements = [heading_title, search_placeholder, img_text, food_categories_title, view_all, manakesh, pizza, pastries, snacks, drop_1, drop_2, drop_3, drop_4, drop_5];

        // If selected language is arabic change the html elements' inner html to arabic
        if (localStorage.getItem('language') === 'arabic') {
            console.log("arabic");

            // Language Updates
            heading_title.innerHTML = 'فرن البتول';
            search_placeholder.placeholder = 'ابحث';
            img_text.innerHTML ='مبيعات <br> اليوم';
            food_categories_title.innerHTML = 'أصناف الطعام';
            view_all.innerHTML = 'عرض الكل';
            manakesh.innerHTML = 'مناقيش';
            pizza.innerHTML = 'بيتزا';
            pastries.innerHTML = 'معجنات';
            snacks.innerHTML = 'وجبات خفيفة';
            drop_1.innerHTML = 'اتصل بنا';
            drop_2.innerHTML = 'توصيل ديليفاري';
            drop_3.innerHTML = 'الموقع';
            drop_4.innerHTML = 'ساعات العمل';
            drop_5.innerHTML = 'قائمة طعام';

            // Fix width
            [snacks, pizza, pastries, manakesh].forEach((element) => {
                element.style.width = '110px';
            }); 

            elements.forEach((element) => {
                element.classList.add('arabic-font');
            });
        } 

        // If selected language is english render the defualt page with no updates
        else {
            console.log('english');
            elements.forEach((element) => {
                element.classList.add('english-font');
            });
        }
    }

});