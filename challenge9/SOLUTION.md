# Solution to Challenge 9

1. Update the _containerpilot.json_ in the frontend with the memory sensor shown below.
```
"sensors": [
  {
    "namespace": "containerpilot",
    "subsystem": "frontend",
    "name": "free_memory",
    "help": "Frontend Free Memory",
    "type": "counter",
    "poll": 5,
    "check": ["/bin/memory.sh"],
    "timeout": "5s"
  }
]
```

2. Start the services `docker-compose up -d`

3. Point your browser to [http://localhost:9090](). You should see a new entry for the memory metric.

Cleanup the existing containers:
```
docker-compose down
```
