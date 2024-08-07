from django.shortcuts import render
from rest_framework import generics, status
from .serializers import UserLoginSerializer, UserSerializer, UserLogoutSerializer, UserProfileSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny


# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):

        # Convert username and emaiil to lowercase
        request.data["username"] = request.data.get("username", "").lower()
        request.data["email"] = request.data.get("email", "").lower()

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {
                "message": "User created successfully",
                "user": serializer.data
            },
            status=status.HTTP_201_CREATED,
            headers=headers
        )


class LoginView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):

        # Convert username to lowercase
        request.data["username"] = request.data.get("username", "").lower()


        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        tokens = serializer.validated_data["tokens"]

        return Response(
            {
                "message": "User logged in successfully!",
                "username": serializer.validated_data["username"],
                "refresh": tokens["refresh"],
                "access": tokens["access"]
            },
            status=status.HTTP_200_OK
        )
    

class UserProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user
    

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):

        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(
                {
                    "message": "User logged out successfully"
                },
                status=status.HTTP_205_RESET_CONTENT
            )
        except Exception as e:
            return Response(
                {
                    "error": str(e)
                }, status=status.HTTP_400_BAD_REQUEST
            )

    