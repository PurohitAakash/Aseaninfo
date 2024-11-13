from airtable import Airtable
from django.conf import settings

# Initialize Airtable connection
airtable = Airtable(settings.AIRTABLE_BASE_ID, settings.AIRTABLE_TABLE_NAME, api_key=settings.AIRTABLE_API_KEY)

def list_records():
    return airtable.get_all()

def create_record(fields):
    return airtable.insert(fields)

def update_record(record_id, fields):
    return airtable.update(record_id, fields)


