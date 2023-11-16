import express from "express";
const router = express.Router();
import {
  addVehicle,
  getVehiclesList,
  getVehicleById,
  deleteVehicle,
  updateVehicle,
} from "../controllers/controllers.js";

router.post("/", addVehicle);
router.get("/", getVehiclesList);
router.get("/:id", getVehicleById);
router.delete("/:id", deleteVehicle);
router.put("/:id", updateVehicle);

export default router;
