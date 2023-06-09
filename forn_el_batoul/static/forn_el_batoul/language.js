
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
    else if (page.value === 'home') {
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
            drop_2.innerHTML = 'ساعات العمل';
            drop_3.innerHTML = 'الموقع';
            drop_4.innerHTML = 'قائمة الطعام';
            drop_5.innerHTML = 'غير اللغة';

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
    // End of home page

    // Main menu
    else if (page.value === 'main_menu') {

        // Getting all elements that need to change thier value
        greeting = document.querySelector('.greeting');
        description = document.querySelector('.description');
        scrolling_wrapper = document.querySelector('.scrolling-wrapper');
        card_1 = document.querySelector('.scrolling-wrapper .card-1 span');
        card_2 = document.querySelector('.scrolling-wrapper .card-2 span');
        card_3 = document.querySelector('.scrolling-wrapper .card-3 span');
        card_4 = document.querySelector('.scrolling-wrapper .card-4 span');
        card_5 = document.querySelector('.scrolling-wrapper .card-5 span');
        manakish = document.querySelector('#manakish .header .title');
        pizza = document.querySelector('#pizza .header .title');
        pastries = document.querySelector('#pastries .header .title');
        snacks = document.querySelector('#snacks .header .title');
        pizza_price_container = document.querySelector('.pizza_price_container');
        pizza_price_key = document.querySelector('.pizza_price_container .key');
        pizza_price_value = document.querySelector('.pizza_price_container .value');
        pizza_price_key_small = document.querySelector('.pizza_price_container_small .key');
        pizza_price_value_small = document.querySelector('.pizza_price_container_small .value');
        sizes_container = document.querySelector('.sizes');
        sizes = document.querySelector('.sizes span');
        small = document.querySelector('#small');
        medium = document.querySelector('#medium');
        large = document.querySelector('#large');
        price_heading = document.querySelectorAll('.price_heading');
        coming_soon = document.querySelector('#snacks .choice .choice_name');
        pizza_choices = document.querySelectorAll('#pizza .choice div');
        pizza_choices_spans = document.querySelectorAll('#pizza .choice div span');
        header_2 = document.querySelector('.header_2');
        pizza_header = document.querySelector('#pizza .header');
        contact_us_dr = document.querySelector('#contact_us_drp');

        elements = [greeting, description, scrolling_wrapper, card_1, card_2, card_3, card_4, card_5, manakish, pizza, pastries, snacks, pizza_price_key, pizza_price_key_small, sizes, small, medium, large, coming_soon, contact_us_drp];

        // If selected language is arabic change the html elements' inner html to arabic
        if (localStorage.getItem('language') === 'arabic') {
            console.log('arabic');
            
            // Change values to arabic
            greeting.innerHTML = 'فرن البتول';
            description.innerHTML = '!دائما ما تكون منتجاتنا طازجة حسب الطلب وتقدم ساخنة ولذيذة. جرب طعم منتجاتنا الفريدة';
            card_1.innerHTML = 'مناقيش';
            card_2.innerHTML = 'بيتزا';
            card_3.innerHTML = 'معجنات';
            card_4.innerHTML = 'وجبات خفيفة';
            card_5.innerHTML = 'مشروبات باردة';
            manakish.innerHTML = 'مناقيش';
            pizza.innerHTML = 'بيتزا';
            pastries.innerHTML = 'معجنات';
            snacks.innerHTML = 'وجبات خفيفة';
            pizza_price_key.innerHTML = ':السعر';
            pizza_price_key_small.innerHTML = ':السعر';
            sizes.innerHTML = ':الحجم';
            small.innerHTML = 'صغير';
            medium.innerHTML = 'وسط';
            large.innerHTML = 'كبير';
            coming_soon.innerHTML = '! قريباً';
            contact_us_drp.innerHTML = 'اتصل بنا';

            price_heading.forEach((el) => {
                el.innerHTML = 'السعر';
                el.classList.remove('english-font');
                el.classList.add('arabic-font');
            });

            [greeting, description].forEach((element) => {
                element.style.textAlign = 'right';
            });

            // Styles
            sizes_container.style.order = '2';
            large.style.order = '1';
            medium.style.order = '2'
            small.style.order = '3';
            sizes.style.order = '4';

            pizza_price_container.style.order = '1';
            pizza_price_key.style.order = '2';
            pizza_price_value.style.order = '1';
            pizza_price_key_small.style.order = '2';
            pizza_price_value_small.style.order = '1';

            pizza_price_key_small.style.margin = '0 0 0 5px';

            header_2.style.padding = '15px 0 20px 0';
            sizes.style.marginRight = '0';
            sizes_container.style.justifyContent = 'flex-end';

            /* Align scrallable cards to the right of the screen on large screens only */ 
            if (window.matchMedia("(min-width: 515px)").matches) {
                scrolling_wrapper.style.justifyContent = 'flex-end';
            }

            pizza_header.style.paddingRight = '0';
            
            pizza_choices.forEach((el) => {
                el.style.width = '100%';
            }); 
            pizza_choices_spans.forEach((el) => {
                el.style.textAlign = 'right';
            });
            

            // Apply arabic font for all elements
            elements.forEach((element) => {
                element.classList.remove('english-font');
                element.classList.add('arabic-font');
            });

            // Get all english menu option and replace by arabic
            document.querySelectorAll('.english').forEach((element) => {
                element.style.display = 'none';
                element.classList.remove('arabic-font');
                element.classList.add('english-font');
            }); 

            // Get all arabic elements and display block
            document.querySelectorAll('.arabic').forEach((element) => {
                element.style.display = 'block';
                element.classList.remove('english-font');
                element.classList.add('arabic-font');
            }); 
        }
        
        // If english don't change anything
        else {
            console.log('english');
            
        }
    }
    // End of main menu

    // Main menu
    else if (page.value === 'contact_us') {
        // Get elements
        head = document.querySelector('.container_1 .title');
        working_hours = document.querySelector('.working_hours .title');
        location_head = document.querySelector('.location .title');
        contact_us = document.querySelector('.contact_us .title');
        description = document.querySelector('.description');
        days = document.querySelector('.days');
        open_div = document.querySelector('.open');
        close_div = document.querySelector('.close');
        open_span = document.querySelector('.open .head');
        close_span = document.querySelector('.close .head');
        location_div = document.querySelector('.location div');
        location_span1 = document.querySelector('.location div .details');
        location_span2 = document.querySelector('#lebanon');
        contact_us_numbers = document.querySelector('.contact_us .details');
        social_media = document.querySelector('.contact_us .social_media');
        facebook = document.querySelector('.contact_us .social_media .facebook');
        instagram = document.querySelector('.contact_us .social_media .instagram');

        elements = [head, working_hours, location_head, contact_us, description, days, open_span, close_span, location_span1, location_span2, contact_us_numbers];
        
        // If selected language is arabic make changes
        if (localStorage.getItem('language') === 'arabic') {
            // Apply arabic font
            head.innerText = 'فرن البتول';
            working_hours.innerText = 'ساعات العمل';
            location_head.innerText = 'الموقع';
            contact_us.innerText = 'تواصل معنا';
            description.innerText = 'دائما ما تكون منتجاتنا طازجة حسب الطلب وتقدم ساخنة ولذيذة. جرب طعم منتجاتنا الفريدة';
            days.innerText = 'من الاثنين إلى السبت';
            open_span.innerText = ': يفتح';
            close_span.innerText = ': يغلق';
            location_span1.innerText = 'المنصوري ، جنوب';
            location_span2.innerText = 'لبنان';

            // Styles
            description.style.paddingTop = '15px';
            open_div.style.justifyContent = 'flex-end';
            close_div.style.justifyContent = 'flex-end';
            open_span.style.order = '2';
            open_span.style.margin = '0 0 0 13px';
            close_span.style.order = '2';
            close_span.style.margin = '0 0 0 10px';
            location_div.style.justifyContent = 'flex-end';
            location_div.style.margin = '5px 0 5px 0';
            location_span1.style.order = '2';
            location_span1.style.marginLeft = '10px';
            contact_us_numbers.style.margin = '0 0 7px 0';
            social_media.style.justifyContent = 'flex-end';
            
            instagram.style.margin = '0 5px 0 10px';
            facebook.style.margin = '0 5px 0 5px';

            days.style.margin = '4px 0 8px 0';

            if (window.matchMedia("(max-width: 300px)").matches) {
                open_span.style.margin = '0 0 0 7px';
                close_span.style.margin = '0 0 0 4px';
            } 

            // Apply arabic font
            elements.forEach((element) => {
                element.classList.add('arabic-font');
                element.style.textAlign = 'right';
            });
        }

        // If selected language is english render the defualt page with no updates
        else {
            // Aplly english font
            elements.forEach((element) => {
                element.classList.add('english-font');
            });
        }
    }
});
