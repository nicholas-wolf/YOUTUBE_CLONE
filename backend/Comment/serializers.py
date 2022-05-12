from rest_framework import serializers
from .models import Comment

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'video_id', 'text', 'likes', 'dislikes']
        depth = 1
