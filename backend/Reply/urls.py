from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/view/', views.get_replies), 
    path('post/<int:pk>/', views.post_reply)
]