## Solution to Challenge 4

1. Build the frontend image
```
docker build -t frontend frontend/
```

2. Build the serializer image
```
docker build -t serializer serializer/
```

3. Start InfluxDB in detached mode, with a name
```
docker run -p 8083:8083 -p 8086:8086 -e "ADMIN_USER=root" -e "INFLUXDB_INIT_PWD=root" -e "INFLUXDB_ADMIN_ENABLED=true" -d --name influx influxdb:1.1.1-alpine
```

4. Get the IP address for InfluxDB
```
docker inspect influx | grep "IPAddress"
```

5. Start the serializer with the IP address for InfluxDB set correctly
```
docker run -p 10000:10000 -e "INFLUXDB_HOST=172.17.0.2" -e "INFLUXDB_USER=root" -e "INFLUXDB_PWD=root" -e "PORT=10000" -d --name serializer serializer
```

6. Get the IP address for the serializer
```
docker inspect serializer | grep "IPAddress"
```

7. Start the frontend and set the correct environment variables.
```
docker run -p 10001:10001 -e "SERIALIZER_HOST=172.17.0.3" -e "SERIALIZER_PORT=10000" -e "PORT=10001" -d --name frontend frontend
```

8. Point your browser to [http://localhost:10001](). You should see the temperature chart.

9. Send temperature data to the serializer to see it show in the chart.
```
curl -X POST -d '[{"value": 32}]' http://localhost:10000/write/temperature  --header "Content-Type:application/json"
```

Cleanup the existing containers by removing them:
```
docker rm serializer frontend influx --force
```
