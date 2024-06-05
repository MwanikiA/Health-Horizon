from rest_framework import viewsets
from .models import Patient, Appointment
from .serializer import PatientSerializer, AppointmentSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views import View
import json
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token


@method_decorator(csrf_exempt, name='dispatch')  # Exempt CSRF for this view
class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
@method_decorator(csrf_exempt, name='dispatch')  # Exempt CSRF for this view
class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


@method_decorator(csrf_exempt, name='dispatch')  # Exempt CSRF for this view
class CustomLoginView(View):
    def post(self, request):
        body = json.loads(request.body)
        user = authenticate(username=body['email'], password=body['password'])
        if user is not None:
            token ,create = Token.objects.get_or_create(user=user)
            login(request, user)
            return JsonResponse({'success': True, 'token' : token.key})
        else:
            return JsonResponse({'success': False, 'error': 'Invalid credentials'})
        
@method_decorator(csrf_exempt, name='dispatch')  # Exempt CSRF for this view
class CustomRegisterView(View):
    def post(self, request):
        body = json.loads(request.body)
        if body['password'] != body['confirmPassword']:
            return JsonResponse({'success': False, 'error': 'Passwords do not match'})

        try:
            user = User.objects.create_user(username=body['email'], email=body['email'], password=body['password'])
            if user:
                return JsonResponse({'success': True})
            else:
                return JsonResponse({'success': False, 'error': 'Registration failed'})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})