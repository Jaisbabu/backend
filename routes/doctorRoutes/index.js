import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.status(201).json({ message: "Signup Successfull" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login Successfull" });
});

export default router;
