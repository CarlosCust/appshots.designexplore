import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seekfy - Design Inspiration for Apps & Websites",
  description:
    "Find design inspiration. Search for apps, flows, screens, UI elements or text in screens.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-indivisible antialiased">{children}</body>
    </html>
  );
}
