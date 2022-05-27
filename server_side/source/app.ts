import { Express } from 'express';
import express = require('express');
import logger from "./utils/logging";
import userRoutes from "./route/user.routes";
import logging from "./utils/logging";
import { string } from "zod";
import bodyParser from "body-parser";

const app: Express = express();
const NAMESPACE = 'APP'
const Endpoint = '/api/v1'

/** Parse the body of the request */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`${Endpoint}/check`, (req, res) => {
  res.status(200).send('APP is Running');
  logger.info(NAMESPACE,'APP is Running Correctly' )
});

app.use(`${Endpoint}`, userRoutes);


export default app;