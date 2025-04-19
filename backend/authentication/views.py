from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json

@csrf_exempt
@require_http_methods(['POST'])
def login_view(request):
    data = json.loads(request.body)
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return JsonResponse({'detail': 'Please provide email and password.'}, status=400)

    user = authenticate(username=email, password=password)
    if user is None:
        return JsonResponse({'detail': 'Invalid credentials.'}, status=401)

    login(request, user)
    return JsonResponse({
        'id': user.id,
        'email': user.email
    })

@csrf_exempt
@require_http_methods(['POST'])
def register_view(request):
    data = json.loads(request.body)
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return JsonResponse({'detail': 'Please provide email and password.'}, status=400)

    if User.objects.filter(email=email).exists():
        return JsonResponse({'detail': 'User with this email already exists.'}, status=400)

    user = User.objects.create_user(username=email, email=email, password=password)
    login(request, user)
    
    return JsonResponse({
        'id': user.id,
        'email': user.email
    })

@csrf_exempt
@require_http_methods(['POST'])
def logout_view(request):
    logout(request)
    return JsonResponse({'detail': 'Successfully logged out.'})

@require_http_methods(['GET'])
def user_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'detail': 'Not authenticated.'}, status=401)
    
    return JsonResponse({
        'id': request.user.id,
        'email': request.user.email
    })