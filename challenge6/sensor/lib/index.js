'use strict';

// Load modules

const Brule = require('brule');
const Hapi = require('hapi');
const Items = require('items');
const Seneca = require('seneca');
const Wreck = require('wreck');


const internals = {
  type: process.env.SENSOR_TYPE,
  failCount: 0
};


function main () {
  const hapi = new Hapi.Server();
  hapi.connection({ host: '127.0.0.1', port: process.env.PORT });
  hapi.register(Brule, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    hapi.start((err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      console.log(`Hapi server started at http://127.0.0.1:${hapi.info.port}`);

      internals.smartthings = Seneca();
      internals.smartthings.client({
        host: process.env.SMARTTHINGS_HOST,
        port: process.env.SMARTTHINGS_PORT
      });

      readData();
    });
  });
}
main();


function readData () {
  internals.smartthings.act({
    role: 'smartthings',
    cmd: 'read',
    type: internals.type,
    ago: 1
  }, (err, data) => {
    if (err) {
      console.error(err);
      return readAgain();
    }

    if (!data || !data.length) {
      return readAgain();
    }

    writeData(data);
  });
}

function writeData (data) {
  const serializer = {
    address: process.env.SERIALIZER_HOST,
    port: process.env.SERIALIZER_PORT
  };

  data = [].concat.apply([], data);
  Wreck.post(`http://${serializer.address}:${serializer.port}/write/${internals.type}`, { payload: data }, readAgain);
}

function readAgain () {
  setTimeout(readData, 5000);
};
