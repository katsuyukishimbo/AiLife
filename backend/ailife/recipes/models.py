from django.db import models

class Recipe(models.Model):
  name = models.CharField(max_length=100)  # レシピ名
  ingredients = models.TextField()  # 材料
  instructions = models.TextField()  # 調理手順
  # 必要に応じてフィールドを追加します。

  def __str__(self):
    return self.name
