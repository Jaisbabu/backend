import express from "express";
import doctorRoutes from "./doctorRoutes/index.js";
import departmentRoutes from "./departmentRoutes/index.js";
import imageRoutes from "./imageRoutes/index.js";
import userRoutes from "./userRoutes/index.js";

const router = express.Router();

router.use("/doctor", doctorRoutes);
router.use("/user", userRoutes);
router.use("/department", departmentRoutes);
router.use("/upload", imageRoutes);

export default router;
