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
    choice = models.CharField(max_length=64)
    price = models.IntegerField(blank=True)
    description = models.TextField(blank=True)
    food_category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE, related_name="choices")

    # Language options
    LANGUAGE = [
        ('Arabic', 'arabic'),
        ('English', 'english'),
    ]
    language = models.CharField(max_length=10, choices=LANGUAGE)

    def __str__(self):
        return f"choice: {self.choice}, price: {self.price}, Food Category: {self.food_category}, language: {self.language}"
    