from .airtable_file import list_records, create_record, update_record
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CrawlData
import json


@csrf_exempt
def list_crawldata(request):
    if request.method == 'GET':
        records = list_records() 
        return JsonResponse({'records': records})
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def create_crawldata(request):
    try:
        if request.method == 'POST':
            data = json.loads(request.body.decode('utf-8'))

            # Check for required fields
            required_fields = ['carrier', 'active', 'lastrun', 'duration', 'success', 'rnf', 'fail', 'crawlfrequency', 'durationtolaunch', 'starttime', 'endtime']
            for field in required_fields:
                if field not in data:
                    return JsonResponse({'error': f'Missing required field: {field}'}, status=400)


            data['active'] = int(data['active'])
            data['lastrun'] = float(data['lastrun']) 
            data['duration'] = float(data['duration'])
            data['success'] = int(data['success'])
            data['rnf'] = int(data['rnf'])
            data['fail'] = int(data['fail'])
            data['crawlfrequency'] = int(data['crawlfrequency'])
            data['durationtolaunch'] = int(data['durationtolaunch'])
            data['starttime'] = float(data['starttime'])
            data['endtime'] = float(data['endtime'])
            

            
            new_record = CrawlData.objects.create(
                carrier=data['carrier'],
                active=data['active'],
                lastrun=data['lastrun'],
                duration=data['duration'],
                success=data['success'],
                rnf=data['rnf'],
                fail=data['fail'],
                crawlfrequency=data['crawlfrequency'],
                durationtolaunch=data['durationtolaunch'],
                starttime=data['starttime'],
                endtime=data['endtime']
            )

            
            airtable_record_id = create_record(data)

            return JsonResponse({'record_id': new_record.id, 'airtable_record_id': airtable_record_id}, status=201)
        else:
            return JsonResponse({'error': 'Method not allowed'}, status=405)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)


@csrf_exempt
def update_crawldata(request, record_id):
    if request.method == 'PUT':
        try:
            data = json.loads(request.body.decode('utf-8'))

            
            fields = {
                'carrier': data.get('carrier', ''),
                'active': int(data.get('active', 0)),
                'lastrun': int(data.get('lastrun', 0)),
                'duration': int(data.get('duration', 0)),
                'success': int(data.get('success', 0)),
                'rnf': int(data.get('rnf', 0)),
                'fail': int(data.get('fail', 0)),
                'crawlfrequency': int(data.get('crawlfrequency', 0)),
                'durationtolaunch': int(data.get('durationtolaunch', 0)),
                'starttime': int(data.get('starttime', 0)),
                'endtime': int(data.get('endtime', 0)),
            }



    
            updated_record = update_record(record_id, fields)

            return JsonResponse({'record': updated_record})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
