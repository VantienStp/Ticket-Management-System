"use client";
import { useState } from "react";

export default function TakeNumberPage() {
    const [ticket, setTicket] = useState(null);

    async function handleTakeNumber() {
        const res = await fetch("http://localhost:5000/api/tickets", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ counter: "A" }),
        });

        const data = await res.json();
        setTicket(data.ticket);
    }

    return (
        <div className="min-h-screen bg-law flex items-center justify-center px-4">
            <div className="bg-white/90 shadow-2xl rounded-3xl border border-slate-300 max-w-lg w-full p-10 backdrop-blur-md">
                <div className="text-center mb-8">
                    <img
                        src="/image_2.png"
                        alt="court"
                        className="w-20 h-20 mx-auto mb-4 opacity-90 rounded-full object-cover"
                    />

                    <h1 className="text-3xl font-bold text-slate-800 tracking-wide">
                        HỆ THỐNG LẤY SỐ THỨ TỰ
                    </h1>

                    <p className="text-slate-600 mt-2 text-lg">
                        Tòa Án Nhân Dân – Quầy Giao Dịch A
                    </p>
                </div>

                {!ticket && (
                    <button
                        onClick={handleTakeNumber}
                        className="w-full py-5 bg-blue-700 text-white rounded-2xl text-2xl font-bold shadow-lg
                        hover:bg-blue-800 transition-all active:scale-95"
                    >
                        LẤY SỐ
                    </button>
                )}

                {ticket && (
                    <div className="text-center mt-10 animate-fade">

                        <p className="text-slate-700 text-lg">
                            Bạn vừa nhận số thứ tự
                        </p>

                        <h2 className="text-6xl font-extrabold text-blue-700 mt-3 mb-4 tracking-wider">
                            {ticket.counter}
                            {ticket.number.toString().padStart(3, "0")}
                        </h2>

                        <p className="text-slate-600 text-base">
                            Vui lòng giữ phiếu và chờ được gọi.
                        </p>

                        <button
                            onClick={() => setTicket(null)}
                            className="mt-8 text-blue-700 underline hover:text-blue-900"
                        >
                            Lấy số mới
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
