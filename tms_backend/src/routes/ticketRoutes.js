import { Router } from "express";

import {
    createTicket,
    getTickets,
    callTicket,
    finishTicket,
    getCalling,
    getTicketsByCounter,
    resetToday
} from "../controllers/ticketController.js";

const router = Router();

// API chính
router.post("/", createTicket);
router.get("/", getTickets);

// Trạng thái
router.put("/:id/call", callTicket);
router.put("/:id/done", finishTicket);

// Lấy số theo trạng thái & quầy
router.get("/calling", getCalling);
router.get("/counter/:counter", getTicketsByCounter);

// Reset theo ngày
router.delete("/reset", resetToday);

export default router;
