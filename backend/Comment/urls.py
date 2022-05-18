from django.urls import path
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.get_all_comments),
    path('all/<str:pk>/', views.get_all_comments),
    path('update/<int:pk>/', views.edit_comment),
    path('post/', views.user_comment)
]
