from django.shortcuts import render
from django.conf import settings

static = settings.STATIC_URL
# Create your views here.

def index(request):
    return render(request, "tems/index.html", {'STATIC_URL':static})

