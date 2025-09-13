import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Ena Ema Landing Page",
  description:
    "Pixel-perfect landing page with Tailwind + Framer Motion + Radix UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <Footer />
      </body>
    </html>
  );
}
