import json
import requests
from requests.exceptions import HTTPError
import os

def lambda_handler(event, context):
    code = event['pathParameters']['code']

    try:
        apiKey, apiSecret = get_nsnl_api_key_secret()
        response = requests.get("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station="+ code, 
        headers={apiKey: apiSecret})
        
        response.raise_for_status()

        departures = get_departures(response)
        body = json.dumps(departures)
        response = {
            'statusCode': 200,
            'body': body,
            'headers': {
            'Access-Control-Allow-Headers' : 'Content-Type',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
        }
        return response
    except HTTPError as http_err:
        print('HTTP error occured {0}'.format(http_err))
        raise http_err
    except Exception as err:
        print('internal error occured {0}'.format(err))
        raise err

def get_departures(response):
    departures = []
    payload = json.loads(response.content)
    for data in payload['payload']['departures']:
        departure = {
            'departureTime' : data['plannedDateTime'] if 'plannedDateTime' in data.keys() else ''
            ,'direction': data['direction'] if 'direction' in data.keys() else ''
            ,'platform': data['plannedTrack'] if 'plannedTrack' in data.keys() else ''
            ,'trainType': get_train_type(data['trainCategory']) if 'trainCategory' in data.keys() else ''
            }
        departures.append(departure)
    return departures

def get_train_type(train_category):
    if train_category.lower() == 'spr':
        return 'Sprinter'
    elif train_category.lower() == 'ic':
        return 'Intercity'
    else:
        return train_category

def get_nsnl_api_key_secret():
    return os.environ['ApiKey_NSNL'], os.environ['ApiSecret_NSNL']