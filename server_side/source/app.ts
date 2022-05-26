import { Express } from 'express';
import express = require('express');
import logger from "./utils/logger";
const app: Express = express();
const NAMESPACE = 'APP'

app.get('/api/v1', (req, res) => {
  res.status(200).send('APP is Running');
  logger.info(NAMESPACE,'is Running Correctly' )
});

app.use()

export default app;