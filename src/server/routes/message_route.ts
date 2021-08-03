import { Router } from "express";
import { setMessages } from "../controllors/messages_controllers";

const router = Router();
router.route("/messages").get();
router.route("/messages").post(setMessages);

module.exports = router;
