# crawldata/serializers.py

from rest_framework import serializers
from .models import CrawlData

class CrawlDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = CrawlData
        fields = '__all__'  
