from . import views
from django.urls import path

# List of all url patterns
urlpatterns = [
    path("", views.index, name="index"),
    path("homes", views.home, name="home"),
]
