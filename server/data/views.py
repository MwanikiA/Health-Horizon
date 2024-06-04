from rest_framework import viewsets
from .models import Patient, Appointment
from .serializer import PatientSerializer, AppointmentSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views import View
import json

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class CustomLoginView(View):
    def post(self, request):
        body = json.loads(request.body)
        user = authenticate(username=body['email'], password=body['password'])
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'Invalid credentials'})

class CustomRegisterView(View):
    def post(self, request):
        body = json.loads(request.body)
        if body['password'] != body['confirmPassword']:
            return JsonResponse({'success': False, 'error': 'Passwords do not match'})

        user = User.objects.create_user(username=body['email'], email=body['email'], password=body['password'])
        if user:
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'Registration failed'})
