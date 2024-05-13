from django.db import models
from accounts.models import User

class Product(models.Model):
    name = models.CharField(max_length=255)
    detail = models.TextField()
    price = models.FloatField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def __str__(self):
    return self.name
    
class Meta:
    db_table = 'product'
    managed = True