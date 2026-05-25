import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramu Siripalli",
  description: "MERN Developer Portfolio",
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