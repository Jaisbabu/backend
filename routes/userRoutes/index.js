import express from "express";
import User from "../../db/models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ username: body.username });
  if (!user) {
    return res.status(403).json({ message: "Incorrect Username or Password" });
  }
  const isMatching = await bcrypt.compare(body.password, user.password);
  if (!isMatching) {
    return res.status(403).json({ message: "Incorrect Username or Password" });
  }

  const token = jwt.sign(
    { role: "USER", id: user._id },
    process.env.SECRET_KEY,
    {
      expiresIn: "7d",
    }
  );
  return res.status(200).json({ message: "Login Successfull", token: token });
});

//get user by id
router.get("/profile/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  user.password = "";
  res.status(200).json(user);
});

export default router;
