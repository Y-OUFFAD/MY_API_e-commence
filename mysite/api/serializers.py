from django.db.models import fields
from rest_framework import serializers
from .models import user,product  
 
class userSerializer(serializers.ModelSerializer):
     class Meta:
         model = user
         fields = ('id', 'username', 'password', 'email')

class productSerializer(serializers.ModelSerializer):
     class Meta:
         model = product
         fields = ('id', 'name', 'description')       