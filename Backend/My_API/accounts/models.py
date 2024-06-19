# from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# class UserProfileManager(BaseUserManager):
#     def create_user(self, email, username, password=None):
#         """
#         Crée et renvoie un utilisateur avec un email, un nom d'utilisateur et un mot de passe.
#         """
#         if not email:
#             raise ValueError('L\'adresse email est obligatoire.')
        
#         if not username:
#             raise ValueError('Le nom d\'utilisateur est obligatoire.')

#         user = self.model(
#             email=self.normalize_email(email),
#             username=username,
#         )

#         user.set_password(password)
#         user.is_staff = True
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, username, password):
#         """
#         Crée et renvoie un super utilisateur avec un email, un nom d'utilisateur et un mot de passe.
#         """
#         user = self.create_user(
#             email=self.normalize_email(email),
#             username=username,
#             password=password,
#         )
#         user.is_staff = True
#         user.is_superuser = True
#         user.save(using=self._db)
#         return user

# class User(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(max_length=255, unique=True)
#     username = models.CharField(max_length=255, unique=True)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     objects = UserProfileManager()

#     USERNAME_FIELD = 'username'
#     REQUIRED_FIELDS = ['email']

#     def __str__(self):
#         return self.usernam

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.conf import settings

class UserProfileManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        """
        Crée et renvoie un utilisateur avec un email, un nom d'utilisateur et un mot de passe.
        """
        if not email:
            raise ValueError('L\'adresse email est obligatoire.')
        
        if not username:
            raise ValueError('Le nom d\'utilisateur est obligatoire.')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        user.set_password(password)
        user.is_staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        """
        Crée et renvoie un super utilisateur avec un email, un nom d'utilisateur et un mot de passe.
        """
        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            password=password,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username