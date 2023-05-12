from django.contrib import admin
from .models import FoodCategory, Choice

# Register models
admin.site.register(FoodCategory)
admin.site.register(Choice)
