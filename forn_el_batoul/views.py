from django.shortcuts import render
from django.http import HttpResponse
from .models import Choice, FoodCategory

# Create your views here.

# Index view 
def index(request):
    # Return html page for the user to choose between english and arabic
    return render(request, "forn_el_batoul/index.html")


# Home page view
def home(request):
    # A lsit of all food categories
    manakesh = {
        'title': 'Manakesh',
        'img': '/static/forn_el_batoul/media/manakesh.jpeg',
    }
    pizza = {
        'title': 'Pizza',
        'img': '/static/forn_el_batoul/media/pizza.jpeg',
    }
    pastries = {
        'title': 'Pastries',
        'img': '/static/forn_el_batoul/media/pastries.jpeg',
    }
    snacks = {
        'title': 'Snacks',
        'img': '/static/forn_el_batoul/media/snacks.jpg',
    }
    food_categories = [
        manakesh,
        pizza,
        pastries,
        snacks,
    ]

    # Get menu choices from the database
    manakish = FoodCategory.objects.get(category_name="Manakish").choices.all()
    pizza = FoodCategory.objects.get(category_name="Pizza").choices.all()
    pastries = FoodCategory.objects.get(category_name="Pastries").choices.all().order_by('order').values()

    categories_choices = [manakish, pizza, pastries]

    # Return home page
    return render(request, "forn_el_batoul/home.html", {
        "food_categories": food_categories,
        "categories_choices": categories_choices
    })

def main_menu(request):
    # Get menu choices from the database
    manakish = FoodCategory.objects.get(category_name="Manakish").choices.all()
    pizza = FoodCategory.objects.get(category_name="Pizza").choices.all()
    pastries = FoodCategory.objects.get(category_name="Pastries").choices.all().order_by('order').values()

    ## Post method
    if request.method == "POST":
        # Get the searched name
        searched = request.POST["searched"]

        # Return main menu html page
        return render(request, "forn_el_batoul/main_menu.html", {
            "manakish": manakish,
            "pizza": pizza,
            "pastries": pastries,
            "searched": searched
        })
    
    ## Get method
    else:
        # Return main menu html page
        return render(request, "forn_el_batoul/main_menu.html", {
            "manakish": manakish,
            "pizza": pizza,
            "pastries": pastries,
            "searched": "none"
        })
