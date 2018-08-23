from .views import bookAPIView, bookRudView
from django.conf.urls import url

urlpatterns = [
  url(r'^$', bookAPIView.as_view(), name='book-create'),
  url(r'^(?P<id>\d+)', bookRudView.as_view(), name='book-rud')
]