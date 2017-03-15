## Solution to Challenge 3

1. Update the Dockerfile with the CMD below
```sh
CMD ["node", "/opt/app/lib"]
```
2. Build the image with `docker build -t frontend .`
3. Create and run the container with `docker run -e PORT=10001 -p 10001:10001 --rm frontend`

Point your browser to [http://localhost:10001](). You should see the temperature chart.
