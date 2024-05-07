# from django.db.models import fields
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'username')
        extra_kwargs = {'password': {'write_only': True}}


# class productSerializer(serializers.ModelSerializer):
#      class Meta:
#          model = product
#          fields = ('id', 'name', 'description')       