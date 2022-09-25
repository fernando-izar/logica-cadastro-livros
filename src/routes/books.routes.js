import { Router } from "express";

import createBookController from "../controllers/createBook.controller";

const router = Router();

router.post("", createBookController);

export default router;
