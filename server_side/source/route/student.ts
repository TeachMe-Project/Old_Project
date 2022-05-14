import express from 'express';
import controller from '../controllers/student';

const router = express.Router();

router.get('/get', controller.getAllUser);

export = router;
