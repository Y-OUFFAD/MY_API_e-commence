# from django.shortcuts import render
# from rest_framework.response import Response
# from .serializers import UserSerializer
# from django.http import JsonResponse
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import AllowAny
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework.permissions import IsAuthenticated
# from rest_framework import status
# from django.contrib.auth import get_user_model
# from django.shortcuts import get_object_or_404
# from .models import User


# @api_view(['POST'])
# def create_superuser(request):
#     serializer = UserSerializer(data=request.data)
    
#     if serializer.is_valid():
#         serializer.save(is_superuser=True)
        
#         return Response(serializer.data)
    
# @api_view(['POST'])
# def create_user(request):
#     serializer = UserSerializer(data=request.data)
    
#     if serializer.is_valid():
#         serializer.save()
        
#         return Response(serializer.data)
    
# @api_view(['POST'])
# @permission_classes([AllowAny])
# def register(request):
#     serializer = UserSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
#     return JsonResponse (serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# @permission_classes([AllowAny])
# def login(request):
#     username_or_email = request.data.get('username')
#     password = request.data.get('password')

#     if get_user_model().objects.filter(username=username_or_email).exists():
#             token = TokenObtainPairSerializer().get_token(get_user_model()
#                        .objects.get(username=username_or_email))
#             return Response({
#                     'token': str(token.access_token)
#                 }, status=status.HTTP_200_OK)
#     else:
#         return Response({'error': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
# @api_view(['GET'])
# @permission_classes([IsAuthenticated])  
# def get_all_users(request):
#     users = User.objects.all()
#     serializer = UserSerializer(users, many=True)
#     return Response(serializer.data,)

# @api_view(['GET'])
# @permission_classes([AllowAny])
# def get_user(request, id):
#     user = get_object_or_404(User, id=id)
#     serializer = UserSerializer(user)
#     return Response(serializer.data)


# @api_view(['GET', 'PUT', 'DELETE'])
# @permission_classes([IsAuthenticated])
# def user_detail(request, id):
#     user = get_object_or_404(User, id=id)
    
#     # Check if the request user is admin or the user itself
#     if request.user.is_superuser or request.user == user:
#         if request.method == 'GET':
#             serializer = UserSerializer(user)
#             return Response(serializer.data)
        
#         elif request.method == 'PUT':
#             serializer = UserSerializer(user, data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
#         elif request.method == 'DELETE':
#             user.delete()
#             return Response(status=status.HTTP_204_NO_CONTENT)
#     else:
#         return Response({'detail': '**tion.'}, status=status.HTTP_403_FORBIDDEN)
    
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from .serializers import UserSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import status
from django.contrib.auth import get_user_model
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate


@api_view(['POST'])
@permission_classes([AllowAny])
def create_superuser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(is_superuser=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# @permission_classes([AllowAny])
# def register(request):
#     serializer = UserSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
#     return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return JsonResponse({
            'user': serializer.data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





# @api_view(['POST'])
# @permission_classes([AllowAny])
# def login(request):
#     username_or_email = request.data.get('username')
#     password = request.data.get('password')
#     user = get_user_model().objects.filter(username=username_or_email).first()
#     if user and user.check_password(password):
#         token = TokenObtainPairSerializer().get_token(user)
#         return Response({
#             'token': str(token.access_token)
#         }, status=status.HTTP_200_OK)
#     return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
# @api_view(['POST'])
# @permission_classes([AllowAny])
# def login(request):
#     email = request.data.get('email')
#     password = request.data.get('password')

#     if email is None or password is None:
#         return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)

#     user = authenticate(email=email, password=password)

#     if not user:
#         return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

#     refresh = RefreshToken.for_user(user)
#     return Response({
#         'refresh': str(refresh),
#         'access': str(refresh.access_token),
#     })


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if email is None or password is None:
        return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    user = authenticate(username=user.username, password=password)

    if not user:
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    refresh = RefreshToken.for_user(user)
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_user(request, id):
    user = get_object_or_404(User, id=id)
    serializer = UserSerializer(user)
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_detail(request, id):
    user = get_object_or_404(User, id=id)
    if request.user.is_superuser or request.user == user:
        if request.method == 'GET':
            serializer = UserSerializer(user)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = UserSerializer(user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    return Response({'detail': 'Not authorized to perform this action.'}, status=status.HTTP_403_FORBIDDEN)