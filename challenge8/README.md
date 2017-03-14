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

## Challenge 8

![image](../images/challenge8.png)

Add a humidity and motion sensor service to pull data from smartthings and push it to the serializer. These services will use the existing sensor image and set the `SENSOR_TYPE` appropriately. Add the services to the _docker-compose.yml_ and verify that the graphs in the frontend update.

__hint__ refer to the temperature service in the _docker-compose.yml_ as an example

## Next Up: [Challenge 9](../challenge9/README.md)
