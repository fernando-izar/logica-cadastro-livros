import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import userLoginController from "../controllers/userLogin.controller";

const router = Router();

router.post("", createUserController);
router.post("/login", userLoginController);

export default router;
