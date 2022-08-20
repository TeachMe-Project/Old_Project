"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnect_1 = require("../utils/dbConnect");
const logger_1 = __importDefault(require("../utils/logger"));
const NAMESPACE = 'Students';
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(NAMESPACE, 'Inserting User');
    let { author, title } = req.body;
    let query = `INSERT INTO books (author, title) VALUES ("${author}", "${title}")`;
    (0, dbConnect_1.Connect)()
        .then((connection) => {
        (0, dbConnect_1.Query)(connection, query)
            .then((result) => {
            logger_1.default.info(NAMESPACE, 'Book created: ', result);
            return res.status(200).json({
                result
            });
        })
            .catch((error) => {
            logger_1.default.error(NAMESPACE, error.message, error);
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            logger_1.default.info(NAMESPACE, 'Closing connection.');
            connection.end();
        });
    })
        .catch((error) => {
        logger_1.default.error(NAMESPACE, error.message, error);
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(NAMESPACE, 'Getting all books.');
    let query = 'SELECT * FROM books';
    (0, dbConnect_1.Connect)()
        .then((connection) => {
        (0, dbConnect_1.Query)(connection, query)
            .then((results) => {
            logger_1.default.info(NAMESPACE, 'Retrieved books: ', results);
            return res.status(200).json({
                results
            });
        })
            .catch((error) => {
            logger_1.default.error(NAMESPACE, error.message, error);
            return res.status(200).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            logger_1.default.info(NAMESPACE, 'Closing connection.');
            connection.end();
        });
    })
        .catch((error) => {
        logger_1.default.error(NAMESPACE, error.message, error);
        return res.status(200).json({
            message: error.message,
            error
        });
    });
});
exports.default = { createUser, getAll };
