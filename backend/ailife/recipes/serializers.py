from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Recipe
    fields = ('name', 'ingredients', 'instructions')  # 必要に応じてフィールドを追加
