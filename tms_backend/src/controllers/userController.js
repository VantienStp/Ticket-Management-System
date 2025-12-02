import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// CREATE ADMIN lần đầu
export async function createAdmin(req, res) {
    try {
        const { username, password } = req.body;

        const exists = await User.findOne({ username });
        if (exists) return res.status(400).json({ error: "User already exists" });

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            password: hashed,
            role: "admin",
        });

        res.json({ success: true, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// LOGIN
export async function login(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "Invalid username" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Wrong password" });

    // Create tokens
    const accessToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
        { id: user._id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
    );

    res.json({
        success: true,
        user: {
            id: user._id,
            username: user.username,
            role: user.role,
        },
        accessToken,
        refreshToken,
    });
}

// REFRESH TOKEN
export async function refresh(req, res) {
    const { token } = req.body;

    if (!token) return res.status(401).json({ error: "Missing token" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

        const accessToken = jwt.sign(
            { id: decoded.id },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );

        res.json({ success: true, accessToken });
    } catch (err) {
        return res.status(403).json({ error: "Invalid refresh token" });
    }
}
