import { Router } from "express";
import { setChannel, test } from "../controllors/channel_controller";

const router = Router();
router.route("/channel").post(setChannel);
router.route("/").get(test);
module.exports = router;
