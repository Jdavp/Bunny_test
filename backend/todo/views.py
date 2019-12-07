from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, TaskSerializer 
from .models import User, User_Tasks

class UserView(viewsets.ModelViewSet):  
  serializer_class = UserSerializer
  queryset = User.objects.all()

class TaskView(viewsets.ModelViewSet):  
  serializer_class = TaskSerializer
  queryset = User_Tasks.objects.all()

#Get user tasks
def user_tasks(request, pk):
    """tasks=get_object_or_404(Task, pk=pk)
    form = UserForm(request.GET or None, instance=task)
    if form.is_valid():
    """
    data = User_Tasks.objects.filter(user_id = pk)
    return JsonResponse(list(data.values()), safe=False)