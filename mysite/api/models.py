from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50, unique=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']


    def __str__(self):
        return self.email


# AbstractBaseUser demande d'authentification par django
# class user(AbstractBaseUser):
#     email =  models.EmailField ( max_length = 50),
#     username = models.CharField(max_length=30),
#     password = models.CharField(max_length=30),
    



# AbstractBaseUser demande d'authentification par django




# class User(AbstractBaseUser):
#     email = models.EmailField(max_length=50, unique=True, null=True)  # Autorise les valeurs nulles temporairement
#     username = models.CharField(max_length=30, unique=True)
#     password = models.CharField(max_length=30)

#     USERNAME_FIELD = 'username'
#     REQUIRED_FIELDS = ['email']

#     def __str__(self) -> str:
#         return self.email



# def __str__(self) -> str:
#         return self.name

# class product(models.Model):
#     name = models.CharField(max_length=30),
#     description = models.CharField(),
#     # price = decimal,

# def __str__(self) -> str:
#         return self.name


