import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
router.post("/image", upload.single("file"), (req, res) => {
  try {
    res.json({ url: `http://localhost:4000/${req.file.filename}` });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
