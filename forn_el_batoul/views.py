from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# Index view 
def index(request):
    # Return html page for the user to choose between english and arabic
    return render(request, "forn_el_batoul/index.html")
