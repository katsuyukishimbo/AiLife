from rest_framework import serializers
from .models import MenuHistory

class MenuHistorySerializer(serializers.ModelSerializer):
  class Meta:
    model = MenuHistory
    fields = ('user', 'date', 'recipe')
