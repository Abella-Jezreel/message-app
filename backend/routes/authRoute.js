import { Router } from "express";
import { userRegister } from "../controller/authController.js";

const router = Router();

router.post("/user-register", async (req, res) => {
  userRegister(req, res);
});

export default router;
