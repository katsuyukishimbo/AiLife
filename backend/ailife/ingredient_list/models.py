from django.db import models

class IngredientList(models.Model):
  ingredient = models.CharField(max_length=100)  # 材料名
  quantity = models.IntegerField()  # 量
  # 必要に応じてフィールドを追加します。

  def __str__(self):
      return self.ingredient
