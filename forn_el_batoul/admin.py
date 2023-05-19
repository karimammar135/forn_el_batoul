from django.contrib import admin
from .models import FoodCategory, Choice, PizzaRate

# Register models
admin.site.register(FoodCategory)
admin.site.register(Choice)
admin.site.register(PizzaRate)
