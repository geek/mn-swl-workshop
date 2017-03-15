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
