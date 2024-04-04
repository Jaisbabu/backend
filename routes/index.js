import express from "express";
import doctorRoutes from "./doctorRoutes/index.js";
import departmentRoutes from "./departmentRoutes/index.js";
import imageRoutes from "./imageRoutes/index.js";
import userRoutes from "./userRoutes/index.js";
import slotRoutes from "./SlotRoutes/index.js";
import appointmentRoutes from "./appointmentRoutes/index.js";
import prescriptionRoutes from "./prescriptionRoutes/index.js";

const router = express.Router();

router.use("/doctor", doctorRoutes);
router.use("/user", userRoutes);
router.use("/department", departmentRoutes);
router.use("/slot", slotRoutes);
router.use("/upload", imageRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/prescription", prescriptionRoutes);

export default router;
