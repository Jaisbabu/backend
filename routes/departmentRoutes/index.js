import express from "express";
import Department from "../../db/models/departmentSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = { ...req.body };
  await Department.create(body);
  res.status(201).json({ message: "Department added successfully" });
});

router.get("/", async (req, res) => {
  const response = await Department.find();
  res.status(201).json(response);
});

router.patch("/", async (req, res) => {
  const response = await Department.patchById();
  res.status(201).json(response);
});

router.delete("/", async (req, res) => {
  const id = req.params._id;
  const response = await Department.deleteById(id);
  res.status(201).json(response);
});

router.post("/");

export default router;
