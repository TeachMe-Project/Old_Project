import express,{Request, Response} from "express";
import userController from "../controllers/user.controller";
import { validate } from "../utils/validator";
import userSchema  from "../schema/user.schema";

const router = express.Router();

router.get("/user", userController.getUser);
router.post("/user",validate(userSchema), userController.createUser);

export default router;