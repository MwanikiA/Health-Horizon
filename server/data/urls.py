from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PatientViewSet, AppointmentViewSet, CustomLoginView, CustomRegisterView

router = DefaultRouter()
router.register(r'patients', PatientViewSet)
router.register(r'appointments', AppointmentViewSet)

urlpatterns = [
    path('/', include(router.urls)),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('register/', CustomRegisterView.as_view(), name='register'),
]


