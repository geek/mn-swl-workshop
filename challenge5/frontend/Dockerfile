FROM node:6-alpine

# Install our application
RUN mkdir -p /opt/app/lib/public
COPY package.json /opt/app/
COPY lib/*.js /opt/app/lib/
COPY lib/public /opt/app/lib/public
RUN cd /opt/app && npm install

CMD ["node", "/opt/app/"]
