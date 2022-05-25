"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const student_1 = __importDefault(require("../controllers/student"));
const router = express_1.default.Router();
router.get('/get', student_1.default.getAll);
module.exports = router;
