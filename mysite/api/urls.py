from django.urls import include, path
from . import views



# # from api.views import singnup, index

# from django.contrib import admin


# app_name = "api"
urlpatterns = [
    # path('', views.index, name='index'),
    # path('singnup/',views.singnup, name='singnup'),
    # path('register/', views.adduser, name="Register"),
    # path('',views.getuser),
    # path('read/<str:pk>', views.getuser),
    # path('', views.api_view, name='home'),

    path ('',views.getuser),
    path ('create/',views.add_user,name='adduser'),
    path('read/<str:pk>', views.getuser),


]



 
# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('', views.index, name='index'),
#     # path('get_prod/', include('get_prod.urls')),
#     path('singnup/',views.singnup, name='singnup'),
#     path('register/', views.Registration, name="Register"),
# ]

# urlpatterns = [
#     path('', views.ApiOverview, name='home')
# ]

