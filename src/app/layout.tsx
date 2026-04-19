import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dark Task App",
  description: "Minimalist task manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}