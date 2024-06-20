from django.urls import path
from . import views
from .views import  login
from .views import (
    create_superuser,
    create_user,
    register,
    login,
    get_all_users,
    get_user,
    user_detail
)
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView



urlpatterns = [
    
    path('user/', views.create_user),
    path('create_superuser/',views.create_superuser, name='create_superuser'),
    path('login/', login, name='login'),
    path('admin/', views.create_superuser),
    # path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/get_all_users/', views.get_all_users, name='get_all_users'),
    # path('get_user/<int:id>', views.get_user, name='get_user'),
    path('user/<int:pk>/', views.user_detail, name='user_detail'),
       
]