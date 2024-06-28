import express from "express";
import ViteExpress from "vite-express";
import 'dotenv/config';
import {consoleBox}  from "consolebox";
import vhost from "vhost";
import root from './routers/root.js'
import api from './routers/api.js'
import logger from './middleware/logger.js'

const app = express();

async function startServer() {


  // Clear console 
  process.stdout.write("\x1Bc");

  consoleBox(
    "Initializing".white,
    process.env.APP.toUpperCase().cyan,
    process.env.VERSION.green,
    null,
  );

  app.use(vhost(process.env.DOMAIN, root));
  app.use(vhost('api.' + process.env.DOMAIN, api));


  const port = process.env.PORT;
ViteExpress.listen(app, port, () =>
  logger.info(`Server is listening on port ${port}...`),
);

}


startServer();




