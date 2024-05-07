# from django.shortcuts import render, redirect
from django.http import HttpResponse
# from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers

from rest_framework.response import Response
from .models import CustomUser
from .serializers import UserSerializer

@api_view(['POST'])
def add_user(request):
    user = UserSerializer(data=request.data)
    if user.is_valid():
        user.save()
        return Response(UserSerializer(user), status=201)  
    return Response(serializer.errors, status=400)

#from .models import product
#from .serializers import productSerializer
# from django.contrib.auth.forms import UserCreationForm





# def index(request):
#      return HttpResponse("Hello, world. You're at the get_prod index.")

# def singnup (request):
#     return HttpResponse("Hello, world. You're at the get_prod X.")

       
# def Registration(request):
#      return HttpResponse("Hello, world. You're at the get_prod singnup.")
     


# # add user
# @api_view(['POST'])
# def adduser(request):
#    serializers = userSerializer(data=request.data)
#    if serializers.is_valid():
#        return HttpResponse(serializers)
#    if serializers.is_valid():
#          serializers.save()
     

# @api_view(['POST'])
# def adduser(request):
#     serializers = userSerializer(data=request.data)
#     if serializers.is_valid():
#         user = serializers.save()
#         return Response({'user': user}, status=201)  # Utilisation du statut 201 pour la création réussie
#     return Response(serializers.errors, status=400)  # Gestion des erreurs de validation



# @api_view(['POST'])
# def adduser(request):
#    user = userSerializer(data=request.data)
   
#    if user.objects.filter(**request.data).exists():
#       raise serializers.ValidationError('This data already exists')
 
#    if user.is_valid():
#       user.save()
#       return Response(user.data)
   

#    else:
#       return Response(status=status.HTTP_404_NOT_FOUND)



#get all users
@api_view(['GET'])
def getusers(request):
     users = user.object.all()
     serializers = userSerializer(users, many= True)
     return Response(serializers.data)

#get single user 
@api_view(['GET'])
def getuser(request, pk):
     user = user.object.get(id=pk)
     serializers = userSerializer(user, many= False)
     return Response(serializers.data)
























# @api_view(['GET'])
# def ApiOverview(request):
#     api_urls = {
#         'all_Users': '/',
#         'Search by id': '/?id=id_name',
#         'Search by username': '/?username=username_name',
#         'Search by mail': '/?mail=mail_name',
#         'Search by password': '/?password=password_name',
#         'Add': '/create',
#         'Update': '/update/pk',
#         'Delete': '/users/pk/delete'
#     }





