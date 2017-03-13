FROM node:6-alpine

# Install our application
RUN mkdir -p /opt/app/lib
COPY package.json /opt/app/
COPY lib/* /opt/app/lib/
RUN cd /opt/app && npm install

CMD ["node", "/opt/app/"]
