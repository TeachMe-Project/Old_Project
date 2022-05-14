import express from 'express';
import controller from '../controllers/student';
import asgardeo from '../asgardio_api/user';
const router = express.Router();

router.get('/get', controller.getAllUser);
router.get('/',asgardeo.getAccessToken);

export = router;
