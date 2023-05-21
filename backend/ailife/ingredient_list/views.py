from rest_framework import viewsets
from .models import IngredientList
from .serializers import IngredientListSerializer

class IngredientListViewSet(viewsets.ModelViewSet):
  queryset = IngredientList.objects.all()
  serializer_class = IngredientListSerializer
