from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import HttpResponse
from .models import Choice, FoodCategory, PizzaRate
import json


# Create your views here.

# Index view 
def index(request):
    # Return html page for the user to choose between english and arabic
    return render(request, "forn_el_batoul/index.html")


# Home page view
def home(request):
    # Get menu choices from the database
    manakish = FoodCategory.objects.get(category_name="Manakish").choices.all()
    pizza = FoodCategory.objects.get(category_name="Pizza").choices.all()
    pastries = FoodCategory.objects.get(category_name="Pastries").choices.all().order_by('order').values()

    categories_choices = [manakish, pizza, pastries]

    # Calculate menu choices
    manakish_choices = 0
    pizza_choices = 0
    pastries_choices = 0
    for choice in manakish:
        manakish_choices += 1
    for choice in pizza:
        pizza_choices += 1
    for choice in pastries:
        pastries_choices += 1

    # A lsit of all food categories
    manakesh = {
        'title': 'Manakesh',
        'img': '/static/forn_el_batoul/media/manakesh.jpeg',
        "total_choices": manakish_choices,
    }
    pizza = {
        'title': 'Pizza',
        'img': '/static/forn_el_batoul/media/pizza.jpeg',
        "total_choices": pizza_choices, 
    }
    pastries = {
        'title': 'Pastries',
        'img': '/static/forn_el_batoul/media/pastries.jpeg',
        "total_choices": pastries_choices
    }
    snacks = {
        'title': 'Snacks',
        'img': '/static/forn_el_batoul/media/snacks.jpg',
        "total_choices": 1,
    }
    food_categories = [
        manakesh,
        pizza,
        pastries,
        snacks,
    ]

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

    # Get Pizza rates
    rates = PizzaRate.objects.all()
    pizza_rates = {}
    for rate in rates:
        pizza_rates[rate.size] = rate.price
    # Turn the dictionary into a jason object
    pizza_rates = json.dumps(pizza_rates)


    # Get the current user
    current_user = request.user

    ## Post method
    if request.method == "POST":
        # Get the searched name
        searched = request.POST["searched"]

        # Return main menu html page
        return render(request, "forn_el_batoul/main_menu.html", {
            "manakish": manakish,
            "pizza": pizza,
            "pizza_rates": pizza_rates,
            "pastries": pastries,
            "searched": searched,
            "current_user": current_user
        })
    
    ## Get method
    else:
        # Return main menu html page
        return render(request, "forn_el_batoul/main_menu.html", {
            "manakish": manakish,
            "pizza": pizza,
            "pizza_rates": pizza_rates,
            "pastries": pastries,
            "searched": "none",
            "current_user": current_user
        })


# Contact us view
def contact_us(request):
    # Return contact html page
    return render(request, 'forn_el_batoul/contact_us.html')


## Change the price of a menu choice
def change_price(request):
    # Get the required data
    choice_id = request.POST["choice_id"]
    new_price = request.POST["new_price"]
    
    # Get the specific choice from the database 
    choice = Choice.objects.get(id=choice_id)

    # Update the price to the one supplied by the user
    choice.price = new_price
    choice.save()

    # Redirect the user to the menu page
    return redirect(reverse('main_menu'))


# Change pizza rates
def change_rate(request):
    # Get the required data
    new_price = request.POST['new_price']
    size = request.POST['size']
    
    # Get the specific size from the database and update it
    rate = PizzaRate.objects.get(size=size)
    rate.price = new_price
    rate.save()

    # Redirect the user to the menu page
    return redirect(reverse('main_menu'))