import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeTender - Your Personal Travel Consultant",
  description: "Bespoke luxury travel experiences crafted by your personal travel consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}