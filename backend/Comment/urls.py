from django.urls import path, include
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.get_all_comments),
    path('all/', views.get_all_comments),
    path('update/<int:pk>/', views.edit_comment),
    path('post/', views.user_comment)
]
