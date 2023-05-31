from django.conf import settings
from rest_framework import generics
from .serializers import UserSerializer

class UserList(generics.ListCreateAPIView):
  queryset = ettings.AUTH_USER_MODEL.objects.all()
  serializer_class = UserSerializer
