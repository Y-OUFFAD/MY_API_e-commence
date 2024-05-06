from django.shortcuts import render, redirect
from django.http import HttpResponse
# from django.contrib.auth.forms import UserCreationForm

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from .models import user
#from .models import product
from .serializers import userSerializer
#from .serializers import productSerializer
from rest_framework import serializers
from rest_framework import status




def index(request):
     return HttpResponse("Hello, world. You're at the get_prod index.")

def singnup (request):
    return HttpResponse("Hello, world. You're at the get_prod index.")

       
def Registration(request):
     return HttpResponse("Hello, world. You're at the get_prod singnup.")
     

#get all users
@api_view(['GET'])
def getusers(request):
     users = user.obgect.all()
     serializers = userSerializer(users, many= True)
     return Response(serializers.data)

#get single user 
@api_view(['GET'])
def getuser(request, pk):
     users = user.obgect.get(id=pk)
     serializers = userSerializer(users, many= False)
     return Response(serializers.data)

#add user
@api_view(['GET'])
def adduser(request):
     serializers = userSerializer(data=request.data)

     if serializers.is_valid():
          serializers.save()

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





