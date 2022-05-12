from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/view', views.get_replies), 
    path('post/', views.post_reply)
]