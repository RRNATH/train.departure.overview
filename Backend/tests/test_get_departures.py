import pytest
import requests
import os

def test_get_departure_api_returns_200():
    response = requests.get("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=GVC",
     headers={os.environ['ApiKey_NSNL']: os.environ['ApiSecret_NSNL']})
    assert response.status_code == 200