export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* HEADER */}
      <header className="w-full py-4 px-8 flex justify-between items-center bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">TMS System</h1>
        <nav className="text-slate-600 font-medium">Giới thiệu</nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-20 py-16">

        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Hệ Thống Lấy Số Tự Động <span className="text-blue-600">TMS</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Nhanh chóng – Chính xác – Tiện lợi.
            Giúp tối ưu quá trình phục vụ khách hàng.
          </p>

          <a
            href="/take-number"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow"
          >
            LẤY SỐ NGAY
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0">
          <img
            src="/kiosk.png"
            className="w-[340px] drop-shadow-xl"
            alt="kiosk"
          />
        </div>

      </section>

      {/* FEATURES */}
      <section className="px-8 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          { title: "Cấp số tự động", icon: "🧾" },
          { title: "Gọi số theo quầy", icon: "🎧" },
          { title: "Màn hình hiển thị", icon: "📺" },
          { title: "Quản lý nhân viên", icon: "🔐" },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow text-center"
          >
            <div className="text-4xl">{f.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
          </div>
        ))}

      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-slate-500">
        © 2025 TMS System - All rights reserved
      </footer>
    </div>
  );
}
