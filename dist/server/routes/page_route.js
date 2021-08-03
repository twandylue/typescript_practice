"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const channel_controller_1 = require("../controllors/channel_controller");
const router = express_1.Router();
router.route("/test").post(channel_controller_1.setChannel);
module.exports = router;
