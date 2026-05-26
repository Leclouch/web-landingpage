import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PelletQ-AI | PKM Research Project",
  description: "AI-integrated fish pellet production link hub for a PKM Indonesia academic research project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
