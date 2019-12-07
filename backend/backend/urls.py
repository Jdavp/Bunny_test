from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views

router = routers.DefaultRouter()
router.register(r'user', views.UserView, 'todo')
router.register(r'task', views.TaskView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('user/<int:pk>/user_tasks', views.user_tasks)
]