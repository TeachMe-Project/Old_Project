import * as http from "http";
import app from "./app";
import config from './config/config';
import logging from './utils/logging';
import bodyParser from 'body-parser';


const host = config.server.hostname;
const port = config.server.port;
const NAMESPACE = 'Server';

/** Log the request */
app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use()

/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

app.use((req, res) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const server = http.createServer(app);

server.listen(port, () => logging.info(NAMESPACE, `Server is running http://${host}:${port}`));
