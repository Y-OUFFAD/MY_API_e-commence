from django.urls import path
from . import views
from .views import get_product

urlpatterns = [
    path('all/', views.get_products),
    path('create/', views.post_products),
    path('get/<int:product_id>/', views.get_product),
    path('update/<int:product_id>/', views.update_product),
    path('delete/<int:product_id>/', views.delete_product),
    path('update/<int:id>/', views.update_product, name='update_product'),
    path('delete/<int:id>/', views.delete_product, name='delete_product'),
    
    
    
]

