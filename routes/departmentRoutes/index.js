import express from "express";
import Department from "../../db/models/departmentSchema.js";
import checkToken from "../../middlewares/checkToken.js";
import Doctor from "../../db/models/doctorSchema.js";

const router = express.Router();

//add department
router.post("/", checkToken(["DOCTOR"]), async (req, res) => {
  const body = { ...req.body };
  await Department.create(body);
  res.status(201).json({ message: "Department added successfully" });
});

//list all departments
router.get("/", checkToken(["DOCTOR", "USER"]), async (req, res) => {
  const response = await Department.find();
  res.status(201).json(response);
});

//
router.patch("/", checkToken(["DOCTOR"]), async (req, res) => {
  const response = await Department.patchById();
  res.status(201).json(response);
});

router.delete("/", checkToken(["DOCTOR"]), async (req, res) => {
  const id = req.params._id;
  const response = await Department.deleteById(id);
  res.status(201).json(response);
});

//list doctors by department
router.get("/doctor/:id", checkToken(["USER"]), async (req, res) => {
  const { id } = req.params;
  const doctors = await Doctor.find({ department: id });
  res.status(200).json(doctors);
});

export default router;
