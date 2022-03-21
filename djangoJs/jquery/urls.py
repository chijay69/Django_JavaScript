from django.urls import path, include
from . import views


# urls goes here

app_name= "jquery"

urlpatterns = [
    path('', views.index, name='index'),
    path('email/', views.email, name='email'),
    path('email1/', views.email1, name='email1'),
]
