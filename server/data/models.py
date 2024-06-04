from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    medical_history = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    date = models.DateTimeField()
    description = models.TextField()

    def __str__(self):
        return f"{self.patient.name} - {self.date}"


