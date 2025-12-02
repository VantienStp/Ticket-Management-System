import "@styles/globals.css";

export const metadata = {
  title: "TMS System",
  description: "Auto-number system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
