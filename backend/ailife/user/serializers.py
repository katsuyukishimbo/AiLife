from django.conf import settings
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = ettings.AUTH_USER_MODEL
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}

  def create(self, validated_data):
    return ettings.AUTH_USER_MODEL.objects.create_user(**validated_data)
