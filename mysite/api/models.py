from django.db import models
from django.contrib.auth.models import AbstractBaseUser


# AbstractBaseUser demande d'authentification par django
class user(AbstractBaseUser):
    mail =  models.EmailField ( max_length = 254),
    username = models.CharField(max_length=30),
    password = models.CharField(max_length=30),
    


def __str__(self) -> str:
        return self.name

class product(models.Model):
    name = models.CharField(max_length=30),
    description = models.CharField(),
    # price = decimal,

def __str__(self) -> str:
        return self.name


