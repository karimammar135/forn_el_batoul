from django.db import models

# Models

# Food categories model
class FoodCategory(models.Model):
    # category
    category_name = models.CharField(max_length=12)

    def __str__(self):
        return f"{self.category_name}"

# Choices
class Choice(models.Model):
    order = models.IntegerField()
    english_choice = models.CharField(max_length=64)
    arabic_choice  = models.CharField(max_length=64)
    price = models.IntegerField(blank=True)
    english_description = models.TextField(blank=True)
    arabic_description = models.TextField(blank=True)
    food_category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE, related_name="choices")

    def __str__(self):
        return f"id:{self.id}, order: {self.order}, english_choice: {self.english_choice}, arabic_choice: {self.arabic_choice}, price: {self.price}, Food Category: {self.food_category}, english_description: {self.english_description}, arabic_description: {self.arabic_description}"
    
