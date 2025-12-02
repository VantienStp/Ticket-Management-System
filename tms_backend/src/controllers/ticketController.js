import Ticket from "../models/Ticket.js";

// 1) Tạo số mới
export async function createTicket(req, res) {
    try {
        const { counter } = req.body;

        const today = new Date().toISOString().split("T")[0];

        const lastTicket = await Ticket.findOne({ counter, date: today })
            .sort({ number: -1 });

        const nextNumber = lastTicket ? lastTicket.number + 1 : 1;

        const ticket = await Ticket.create({
            number: nextNumber,
            counter,
            date: today,
        });

        res.json({
            success: true,
            ticket,
        });
    } catch (err) {
        res.status(500).json({ error: "Server error", message: err.message });
    }
}

// 2) Lấy tất cả ticket (theo ngày)
export async function getTickets(req, res) {
    const today = new Date().toISOString().split("T")[0];
    const tickets = await Ticket.find({ date: today }).sort({ createdAt: -1 });
    res.json(tickets);
}

// 3) Gọi số (waiting -> calling)
export async function callTicket(req, res) {
    try {
        const id = req.params.id;

        const ticket = await Ticket.findByIdAndUpdate(
            id,
            { status: "calling" },
            { new: true }
        );

        res.json(ticket);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

// 4) Hoàn thành số (calling -> done)
export async function finishTicket(req, res) {
    try {
        const id = req.params.id;

        const ticket = await Ticket.findByIdAndUpdate(
            id,
            { status: "done" },
            { new: true }
        );

        res.json(ticket);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

// 5) Lấy số đang gọi
export async function getCalling(req, res) {
    const today = new Date().toISOString().split("T")[0];
    const calling = await Ticket.find({ status: "calling", date: today })
        .sort({ updatedAt: -1 });

    res.json(calling);
}

// 6) Lấy số theo quầy
export async function getTicketsByCounter(req, res) {
    const today = new Date().toISOString().split("T")[0];
    const { counter } = req.params;

    const tickets = await Ticket.find({ counter, date: today })
        .sort({ createdAt: -1 });

    res.json(tickets);
}

// 7) Reset số của ngày hôm nay
export async function resetToday(req, res) {
    const today = new Date().toISOString().split("T")[0];

    await Ticket.deleteMany({ date: today });

    res.json({ success: true, message: "Reset tickets of today" });
}
