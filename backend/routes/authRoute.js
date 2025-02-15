import { Router } from "express";
import { userRegister, userLogin } from "../controller/authController.js";
import upload from "../middleware/multerConfig.js";

const router = Router();

router.post("/user-register", async (req, res) => {
  userRegister(req, res);
});

router.post("/user-login", async (req, res) => {
  userLogin(req, res);
});

export default router;
