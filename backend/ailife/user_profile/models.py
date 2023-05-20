from django.db import models
from django.contrib.auth import get_user_model

class UserProfile(models.Model):
  user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
  bio = models.TextField(blank=True, null=True)  # ユーザーの簡単な自己紹介
  # 必要に応じてフィールドを追加します。

  def __str__(self):
    return self.user.username
