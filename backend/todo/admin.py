# Register your models here.
from django.contrib import admin
from .models import User #add this to import the User model
admin.site.register(User) #add this to register the User model
from .models import User_Tasks #add this to import the Task model
admin.site.register(User_Tasks) #add this to register the Task model