from django.urls import path
from . import views

urlpatterns = [
    path('crawldata/', views.list_crawldata, name='list-crawldata'),
    path('crawldata/create/', views.create_crawldata, name='create-crawldata'),
    path('crawldata/update/<str:record_id>/', views.update_crawldata, name='update-crawldata'),
    #path('crawldata/delete/<str:record_id>/', views.delete_crawldata, name='delete-crawldata'),
]



