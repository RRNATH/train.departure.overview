import json
import requests
from requests.exceptions import HTTPError
import os

def lambda_handler(event, context):
    try:
        apiKey, apiSecret = get_nsnl_api_key_secret()
        response = requests.get('https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations', 
        headers={apiKey: apiSecret})

        response.raise_for_status()
        
        staions = get_station_code(response)
        body = json.dumps(staions)
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

def get_station_code(response):
    stations = []
    payload = json.loads(response.content)
    for data in payload['payload']:
        staion = {'name' : data['namen']['lang'], 'code': data['code']}
        stations.append(staion)
    return stations
    
def get_nsnl_api_key_secret():
    return os.environ['ApiKey_NSNL'], os.environ['ApiSecret_NSNL']