from rest_framework import serializers
from .models import IngredientList

class IngredientListSerializer(serializers.ModelSerializer):
  class Meta:
    model = IngredientList
    fields = ('ingredient', 'quantity')  # 必要に応じてフィールドを追加
