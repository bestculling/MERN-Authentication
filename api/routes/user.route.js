import express from "express";
import { api } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", api);

export default router;