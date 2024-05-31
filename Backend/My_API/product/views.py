from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ProductSerializer
from .models import Product
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.permissions import IsAuthenticated



@api_view(['POST'])
def post_products(request):
    serializer = ProductSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({'message' : 'Product created successfully'}, status=201)
    
    return Response({'message': 'post Hello, world!'})



@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
   


@api_view(['GET'])
def get_product(request, product_id):
    # Récupérer le produit depuis la base de données
    product = get_object_or_404(Product, id=product_id)
    
    # Sérialiser le produit
    serializer = ProductSerializer(product)
    
    # Renvoyer les détails du produit dans la réponse
    return Response(serializer.data)


# @api_view(['PUT'])
# def put_product(request, product_id):
#     serializer = ProductSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response({'message': 'update Hello, world!'})

@api_view(['PUT'])
@permission_classes([IsAuthenticated, IsAdminUser])
def update_product(request, id):
    product = get_object_or_404(Product, id=id)
    serializer = ProductSerializer(product, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# @api_view(['PUT'])
# @permission_classes([IsAdminUser])
# def update_product(request, id):
#     product = get_object_or_404(Product, id=id)
    
#     if request.method == 'PUT':
#         serializer = ProductSerializer(product, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def delete_product(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    serializer = ProductSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response({'message': 'delete Hello, world!'})

