import { Router } from "express";
import { getFriends } from "../controller/userFriendsController.js";

const router = Router();

router.get("/get-friends", getFriends);

export default router;
