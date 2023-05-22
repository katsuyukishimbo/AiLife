from django.db import models
from django.contrib.auth.models import User
from ailife.recipes.models import Recipe

class Menu(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)  # ユーザーリンク
  date = models.DateField()  # メニューの日付
  recipe = models.ForeignKey(Recipe, on_delete=models.SET_NULL, null=True)  # レシピリンク

  def __str__(self):
      return f"{self.date} - {self.recipe}"
