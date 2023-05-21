from django.urls import path
from .views import UserCreate

urlpatterns = [
  path('user/create/', UserCreate.as_view(), name='user_create'),
  # path('token/obtain/', MyObtainTokenPairView.as_view(), name='token_create'),
  # path('token/refresh/', MyTokenRefreshView.as_view(), name='token_refresh'),
]
