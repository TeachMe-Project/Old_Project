"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = __importDefault(require("./config/config"));
const logger_1 = __importDefault(require("./utils/logger"));
const body_parser_1 = __importDefault(require("body-parser"));
const student_1 = __importDefault(require("./route/student"));
const host = config_1.default.server.hostname;
const port = config_1.default.server.port;
const app = express();
const NAMESPACE = 'Server';
/** Log the request */
app.use((req, res, next) => {
    /** Log the req */
    logger_1.default.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        /** Log the res */
        logger_1.default.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });
    next();
});
/** Parse the body of the request */
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
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
app.use('/users', student_1.default);
app.use((req, res) => {
    const error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
app.listen(port, () => logger_1.default.info(NAMESPACE, `Server is running ${host}:${port}`));
