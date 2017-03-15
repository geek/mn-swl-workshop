## Solution to Challenge 7

1. Start the services `docker-compose up -d`

2. Point your browser to [http://localhost:10001](). You should see the temperature chart.

3. Open the consul dashboard at [http://localhost:8500]().

4. Scale the serializer with the following command, then refresh the consul dashboard.
```
docker-compose scale serializer=2
```

Cleanup the existing containers:
```
docker-compose down
```
