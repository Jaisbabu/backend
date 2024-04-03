import express from "express";
import User from "../../db/models/userSchema.js";
import bcrypt, { hash } from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ username: body.username });
  if (user) {
    return res.status(403).json({ message: "Username already taken" });
  }
  if (body.password !== body.confirmPassword) {
    return res.status(403).json({ message: "Password dont match" });
  }
  const hashPassword = await bcrypt.hash(body.password, 2);
  body.password = hashPassword;
  await User.create(body);
});

export default router;
