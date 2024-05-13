from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ProductSerializer

@api_view(['GET'])
def get_products(request):
    return Response({'message': 'get Hello, world!'})

@api_view(['POST'])
def post_products(request):
    serializer = ProductSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({'message' : 'Product created successfully'}, status=201)
    
    return Response({'message': 'post Hello, world!'})


@api_view(['GET'])
def get_product(request, product_id):
    serializer = ProductSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({'message' : 'Product created successfully'}, status=201)
    
    return Response({'message': 'get one Hello, world!'})

@api_view(['PUT'])
def put_product(request, product_id):
    serializer = ProductSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response({'message': 'update Hello, world!'})

@api_view(['DELETE'])
def delete_product(request, product_id):
    serializer = ProductSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response({'message': 'delete Hello, world!'})

