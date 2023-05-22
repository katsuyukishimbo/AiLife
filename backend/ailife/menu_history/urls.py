from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MenuHistoryViewSet

router = DefaultRouter()
router.register(r'menu_histories', MenuHistoryViewSet)

urlpatterns = [
  path('', include(router.urls)),
]
