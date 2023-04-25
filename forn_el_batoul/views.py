from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# Index view 
def index(request):
    return HttpResponse("Forn el batoul")