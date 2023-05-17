from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.PositiveIntegerField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female')], null=True, blank=True)
    dietary_restrictions = models.TextField(null=True, blank=True)
    food_preferences = models.TextField(null=True, blank=True)
    cooking_experience = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return self.user.username