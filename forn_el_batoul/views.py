from django.shortcuts import render
from django.http import HttpResponse

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

    # Return home page
    return render(request, "forn_el_batoul/home.html", {
        "food_categories": food_categories
    })
