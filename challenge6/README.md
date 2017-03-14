## Solution to Challenge 5

1. Start the services
```
docker-compose up -d
```

2. Point your browser to [http://localhost:10001](). You should see the temperature chart.

3. Send temperature data to the serializer to see it show in the chart.
```
curl -X POST -d '[{"value": 32}]' http://localhost:10000/write/temperature  --header "Content-Type:application/json"
```

Cleanup the existing containers by removing them:
```
docker-compose down
```

## Challenge 6

![image](../images/challenge6.png)

Instead of sending temperature data manually we will add a temperature sensor service that pushes temperature data to the serializer. The contents of this service have been added as a new folder named _sensor_. Additionally, there is also a smartthings service that is added that will supply the sensor with the correct data. Update the _docker-compose.yml_ file with the new services, setting the correct environment variables, then start everything and view the chart in the browser.

__hint__ the temperature sensor expects the following environment variables
* `SENSOR_TYPE=temperature`
* `PORT=10002`
* `SMARTTHINGS_HOST=smartthings`
* `SMARTTHINGS_PORT=10003`
* `SERIALIZER_HOST=serializer`
* `SERIALIZER_PORT=10000`

__hint__ the smartthings service expects the following environment variables
* `PORT=10003`


## Next Up: [Challenge 7](../challenge7/README.md)
