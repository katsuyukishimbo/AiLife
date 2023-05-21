from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
  # ここで新たにフィールドを追加していくことも可能です。例えば、
  # phone = models.CharField(max_length=20, blank=True, null=True)

  def __str__(self):
      return self.username