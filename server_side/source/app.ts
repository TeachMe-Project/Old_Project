import { Express } from 'express';
import express = require('express');
import logger from "./utils/logging";
import userRoutes from "./route/user.routes";

const app: Express = express();
const NAMESPACE = 'APP'
const Endpoint = '/api/v1'

app.get(`${Endpoint}/check`, (req, res) => {
  res.status(200).send('APP is Running');
  logger.info(NAMESPACE,'is Running Correctly' )
});

app.use(`${Endpoint}/user`, userRoutes)

export default app;