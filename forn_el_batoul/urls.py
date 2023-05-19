from . import views
from django.urls import path

# List of all url patterns
urlpatterns = [
    path("", views.index, name="index"),
    path("homes", views.home, name="home"),
    path("main_menu", views.main_menu, name="main_menu"),
    path("contact_us", views.contact_us, name="contact_us"),
    path("change_price", views.change_price, name="change_price"),
    path("change_rate", views.change_rate, name="change_rate")
]
