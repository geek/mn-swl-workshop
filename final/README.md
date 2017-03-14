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

## Final - Take home assignment

![image](../images/final.png)

All of the services are assembled and able to be deployed to production! You can scale any of the services up or down as needed. The _docker-compose.yml_ we were using in development has been renamed to _local-compose.yml_ and there is now a _docker-compose.yml_ that uses an environment file to determine the location of the consul instance in Triton. There is a _setup.sh_ script that will generate the environment file for you.

Your challenge is to deploy everything to Triton.

__hint__ Sign-up for a free Triton account: https://sso.joyent.com/signup

__hint__ Install the Triton CLI: `npm install -g triton`


*** Solution ***

```sh
eval $(triton env)
docker-compose up -d
```

Now everything is running on the Triton!

To find your frontend use:

```sh
triton ip frontend
```


## Next Up: Systems We Love!!!
