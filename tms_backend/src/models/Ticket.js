import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
    {
        number: { type: Number, required: true },
        counter: { type: String, required: true }, // quầy A/B/C
        status: {
            type: String,
            enum: ["waiting", "calling", "done"],
            default: "waiting",
        },
        date: {
            type: String,
            default: () => new Date().toISOString().split("T")[0], // YYYY-MM-DD
        },
    },
    { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema);
