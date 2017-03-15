## Solution to Challenge 6

1. Update the _docker-compose.yml_ with the smartthings and temperature services
```
smartthings:
  build: ./smartthings
  environment:
    - PORT=10003
  restart: always
  expose:
    - "10003"
temperature:
  build: ./sensor
  links:
    - serializer
    - smartthings
  environment:
    - SENSOR_TYPE=temperature
    - SERIALIZER_HOST=serializer
    - SERIALIZER_PORT=10000
    - PORT=10002
    - SMARTTHINGS_HOST=smartthings
    - SMARTTHINGS_PORT=10003
  restart: always
```

2. Start the services `docker-compose up -d`

3. Point your browser to [http://localhost:10001](). You should see the temperature chart.

Cleanup the existing containers by removing them:
```
docker-compose down
```
