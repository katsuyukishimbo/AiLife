from django.db import models
from django.conf import settings
from ailife.recipes.models import Recipe

class MenuHistory(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # ユーザーリンク
  date = models.DateField()  # メニューの日付
  recipe = models.ForeignKey(Recipe, on_delete=models.SET_NULL, null=True)  # レシピリンク

  def __str__(self):
    return f"{self.date} - {self.recipe}"
