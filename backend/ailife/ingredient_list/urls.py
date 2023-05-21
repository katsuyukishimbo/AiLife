from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IngredientListViewSet

router = DefaultRouter()
router.register(r'ingredient_lists', IngredientListViewSet)

urlpatterns = [
  path('', include(router.urls)),
]
