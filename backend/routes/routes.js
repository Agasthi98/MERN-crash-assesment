import express from "express";
const router = express.Router();
import {
  addVehicle,
  getVehiclesList,
  getVehicleById,
} from "../controllers/controllers.js";

router.post("/", addVehicle);
router.get("/", getVehiclesList);
router.get("/:id", getVehicleById);

export default router;
