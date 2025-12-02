import { Router } from "express";
import { createAdmin, login, refresh } from "../controllers/userController.js";
import { auth, adminOnly } from "../middleware/auth.js";

const router = Router();

// tạo admin (chỉ chạy 1 lần)
router.post("/create-admin", createAdmin);

// login
router.post("/login", login);

// refresh token
router.post("/refresh", refresh);

// route test bảo mật
router.get("/protected", auth, (req, res) => {
    res.json({ message: "You are authenticated", user: req.user });
});

// route chỉ admin được truy cập
router.get("/admin-only", auth, adminOnly, (req, res) => {
    res.json({ message: "Hello admin" });
});

export default router;
