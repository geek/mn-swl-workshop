## Solution to Challenge 2

```sh
docker run -p 8083:8083 -p 8086:8086 -e "ADMIN_USER=root" -e "INFLUXDB_INIT_PWD=root" -e "INFLUXDB_ADMIN_ENABLED=true" --rm influxdb:1.1.1-alpine
```

Point your browser to [http://localhost:8083](). You should see the InfluxDB web interface.
