from rest_framework import serializers
from .models import User, User_Tasks

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'name')

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = User_Tasks
    fields = ('id','description','state','user_id')