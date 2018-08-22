from .views import bookAPIView
from django.conf.urls import url

urlpatterns = [
  url(r'^$', bookAPIView.as_view(), name='book-create'),
]