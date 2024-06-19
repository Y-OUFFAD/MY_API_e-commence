# from django.db import models
# from django.conf import settings

# class Product(models.Model):
#     name = models.CharField(max_length=255, default='default_name')
#     detail = models.TextField()
#     price = models.FloatField()
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)  
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.name
    
#     class Meta:
#         db_table = 'product'
#         managed = True

# def __str__(self):
#     return self.name

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.conf import settings


class Product(models.Model):
    name = models.CharField(max_length=255, default='default_name')
    detail = models.TextField()
    price = models.FloatField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'product'
        managed = True    
