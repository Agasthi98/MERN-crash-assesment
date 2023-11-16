import express from "express";
const router = express.Router();
import { addVehicle, getVehiclesList } from "../controllers/controllers.js";

router.post("/", addVehicle);
router.get("/", getVehiclesList);

export default router;
