from rest_framework import serializers
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
            "password",
            "confirm_password"
        )
        extra_kwargs = {
            "password": {
                "write_only": True,
                "required": True
            }
        }

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("A user with that username already exists!")
        return value

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with that email already exists!")
        return value
    
    def validate(self, data):
        if data["password"] != data["confirm_password"]:
            raise serializers.ValidationError("Passwords do not match!")
        return data

    def create(self, validated_data):
        validated_data.pop("confirm_password")
        user = User(
            email=validated_data["email"],
            username=validated_data["username"]
        )
        user.set_password(validated_data["password"])
        user.save()
        return user


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100, required=True)
    password = serializers.CharField(write_only=True, required=True)

    def validate(self, data):
        username = data.get("username", None)
        password = data.get("password", None)

        if username is None or password is None:
            raise serializers.ValidationError(
                "Please provide both username and password!"
            )
        
        # Convert username to lowercase
        # username = username.lower()
        
        user = authenticate(username=username, password=password)

        if user is None:
            raise serializers.ValidationError(
                "Invalid username or password!"
            )
        
        refresh = RefreshToken.for_user(user)

        return {
            "username": user.username,
            "tokens": {
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            }
        }
