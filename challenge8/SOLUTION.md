## Solution to Challenge 8

1. Update the _docker-compose.yml_ with the humidity and motion services, as shown below.
```
motion:
  build: ./sensor
  links:
    - consul:consul
    - smartthings:smartthings
  environment:
    - SENSOR_TYPE=motion
    - PORT=8080
    - SMARTTHINGS_HOST=smartthings
    - SMARTTHINGS_PORT=8080
    - CONSUL_HOST=consul
  restart: always
humidity:
  build: ./sensor
  links:
    - consul:consul
    - smartthings:smartthings
  environment:
    - SENSOR_TYPE=humidity
    - PORT=8080
    - SMARTTHINGS_HOST=smartthings
    - SMARTTHINGS_PORT=8080
    - CONSUL_HOST=consul
    - CONSUL=consul
  restart: always
```

2. Start the services `docker-compose up -d`

3. Point your browser to [http://localhost:10001](). You should see the graphs updating.

Cleanup the existing containers:
```
docker-compose down
```
