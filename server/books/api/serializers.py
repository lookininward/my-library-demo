from rest_framework import serializers
from books.models import Book

class bookSerializer(serializers.ModelSerializer):
  class Meta:
    model = Book
    fields = (
      'id',
      'title',
      'author',
      'description',
    )