from rest_framework import viewsets
from .models import MenuHistory
from .serializers import MenuHistorySerializer

class MenuHistoryViewSet(viewsets.ModelViewSet):
  queryset = MenuHistory.objects.all()
  serializer_class = MenuHistorySerializer
