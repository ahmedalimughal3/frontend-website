import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontdesk | Every visitor deserves a great answer",
  description:
    "A beautifully branded AI sales agent that helps your clients welcome visitors, answer questions, and capture more leads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
