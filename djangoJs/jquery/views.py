from django.shortcuts import render
from django.conf import settings

static = settings.STATIC_URL
# Create your views here.

def index(request):
    return render(request, "tems/index.html", {'STATIC_URL':static})

def email(request):
    return render(request, "tems/email_html.html", {'STATIC_URL':static})

def email1(request):
        return render(request, "tems/email_html1.html", {'STATIC_URL':static})
    
