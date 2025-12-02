import jwt from "jsonwebtoken";

export function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).json({ error: "Missing Authorization header" });

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid token" });

        req.user = user;
        next();
    });
}

export function adminOnly(req, res, next) {
    if (req.user.role !== "admin")
        return res.status(403).json({ error: "Admin only" });

    next();
}
