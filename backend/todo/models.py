from django.db import models

# Create your models here.
class User(models.Model):
    """
        User class handles all application users
    """
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class User_Tasks(models.Model):
    """
        Task class handles all task for application user
    """
    description = models.CharField(max_length=255)
    state = models.BooleanField(default=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.description