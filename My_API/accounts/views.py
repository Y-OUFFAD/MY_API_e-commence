from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer



@api_view(['POST'])
def create_superuser(request):
    serializer = UserSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save(is_superuser=True)
        
        return Response(serializer.data)
    
@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        
        return Response(serializer.data)