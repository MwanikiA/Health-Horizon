from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=255, default='Unknown')
    age = models.IntegerField(default=0)
    medical_history = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    date = models.DateTimeField()
    description = models.TextField(max_length=10000, default='No description')

    def __str__(self):
        return f"{self.patient.name} - {self.date}"


